const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyCrXIV63EiQ7IvP-jod4uFfpVVv6fGueyI';

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagePrompts = [
  {
    name: 'hero-background',
    prompt: 'A soft, comforting abstract gradient background with gentle blues and warm earth tones, conveying peace and support. Minimalist, calming, and appropriate for a grief support website. Photorealistic, peaceful, serene atmosphere.'
  },
  {
    name: 'about-connection',
    prompt: 'Two people standing side by side looking at a peaceful sunset over water, representing sibling connection and remembrance. Warm, comforting golden hour colors, peaceful atmosphere. Silhouette style, appropriate for grief support context. Photorealistic, emotional, hopeful.'
  },
  {
    name: 'retreats-nature',
    prompt: 'Peaceful mountain landscape with a calm lake reflecting mountains at sunrise, conveying healing and hope. Soft, warm golden lighting, serene and comforting. Natural outdoor setting perfect for healing retreats. Photorealistic, tranquil, inspiring.'
  },
  {
    name: 'community-hearts',
    prompt: 'Soft glowing candles arranged in a circle on a peaceful surface, representing community support and remembrance. Warm candlelight, gentle and peaceful atmosphere. Minimalist, compassionate, comforting. Photorealistic, intimate, supportive.'
  }
];

async function generateImage(prompt, filename) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      instances: [
        {
          prompt: prompt
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9',
        negativePrompt: 'ugly, distorted, low quality, blurry, dark, scary',
        safetyFilterLevel: 'block_some',
        personGeneration: 'allow_all'
      }
    });

    // Using Vertex AI Imagen endpoint
    const options = {
      hostname: 'us-central1-aiplatform.googleapis.com',
      port: 443,
      path: `/v1/projects/YOUR_PROJECT_ID/locations/us-central1/publishers/google/models/imagegeneration@006:predict`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    // Try the simpler generateContent API first
    const simpleOptions = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/imagen-3.0-generate-001:generateImages?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const simpleData = JSON.stringify({
      prompt: prompt,
      number_of_images: 1,
      aspect_ratio: '16:9',
      negative_prompt: 'ugly, distorted, low quality, blurry, dark, scary'
    });

    const req = https.request(simpleOptions, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(responseData);

          if (response.error) {
            console.error(`Error generating ${filename}:`, response.error.message);
            reject(response.error);
            return;
          }

          // Handle various response formats
          let imageData = null;
          if (response.generatedImages && response.generatedImages[0]) {
            imageData = response.generatedImages[0].bytesBase64Encoded || response.generatedImages[0].image;
          } else if (response.predictions && response.predictions[0]) {
            imageData = response.predictions[0].bytesBase64Encoded || response.predictions[0].image;
          } else if (response.images && response.images[0]) {
            imageData = response.images[0];
          }

          if (imageData) {
            const buffer = Buffer.from(imageData, 'base64');
            const filepath = path.join(imagesDir, `${filename}.png`);

            fs.writeFileSync(filepath, buffer);
            console.log(`✓ Generated: ${filename}.png`);
            resolve();
          } else {
            console.error(`Unexpected response format for ${filename}:`, JSON.stringify(response, null, 2));
            reject(new Error('Unexpected response format'));
          }
        } catch (error) {
          console.error(`Error processing ${filename}:`, error.message);
          console.error('Response:', responseData);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`Request error for ${filename}:`, error.message);
      reject(error);
    });

    req.write(simpleData);
    req.end();
  });
}

async function generateAllImages() {
  console.log('Generating images with Gemini Imagen...\n');
  console.log('Note: This requires a valid Google Cloud project with Vertex AI enabled.');
  console.log('The API key provided may need to be exchanged for OAuth token.\n');

  for (const imagePrompt of imagePrompts) {
    try {
      console.log(`Generating ${imagePrompt.name}...`);
      await generateImage(imagePrompt.prompt, imagePrompt.name);
      // Add delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`Failed to generate ${imagePrompt.name}`);
    }
  }

  console.log('\n✓ Image generation process complete!');
  console.log(`Check ${imagesDir} for generated images`);
}

generateAllImages().catch(console.error);
