import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const API_KEY = "AIzaSyCrXIV63EiQ7IvP-jod4uFfpVVv6fGueyI";

interface ImagePrompt {
  name: string;
  prompt: string;
  description: string;
}

const imagePrompts: ImagePrompt[] = [
  {
    name: 'hero-background',
    prompt: 'Diverse group of adults standing together on a hilltop at golden hour sunset, arms around each other, silhouetted against warm orange and amber sky. Back view, looking out at horizon. Supportive body language. Pine trees in background. Warm, comforting, community atmosphere. Professional photography. Photorealistic. 16:9 aspect ratio. 8k resolution.',
    description: 'Hero section - supportive community at sunset'
  },
  {
    name: 'mountain-lake-sunrise',
    prompt: 'Small diverse group of adults sitting on rocky shore of mountain lake at sunrise. People talking, supporting each other. Warm golden hour lighting. Peaceful, healing atmosphere. Mountains reflecting in calm water. Mix of ages and ethnicities. Candid, authentic moment. Soft colors: warm golds, soft blues, sage greens. Professional photography. Photorealistic. Wide shot. 8k resolution.',
    description: 'Retreat group at peaceful mountain lake'
  },
  {
    name: 'campfire-circle',
    prompt: 'Circle of diverse adults sitting around a warm campfire at dusk. Faces illuminated by orange firelight glow. People talking, connecting, supporting each other. Genuine emotions. Pine forest background. Cozy, intimate, community atmosphere. Professional photography. Photorealistic. Warm color palette. 8k resolution.',
    description: 'Campfire community circle'
  },
  {
    name: 'forest-walk-together',
    prompt: 'Two people walking side by side on forest trail, golden hour sunlight filtering through trees. Back view showing supportive body language. Dappled light. Warm earth tones and forest greens. Peaceful, hopeful atmosphere. Professional photography. Photorealistic. Represents sibling bond and support. 8k resolution.',
    description: 'Two people walking together - sibling connection'
  },
  {
    name: 'group-mountain-vista',
    prompt: 'Diverse group of adults standing together looking out at mountain vista. Golden hour sunset. Arms around each other, supportive poses. Side/back view. Warm lighting. Mix of ages and ethnicities. Peaceful, inspiring atmosphere. Colors: oranges, ambers, soft greens. Professional photography. Photorealistic. Wide cinematic shot. 8k resolution.',
    description: 'Group overlooking mountains - community support'
  },
  {
    name: 'two-chairs-occupied',
    prompt: 'Two people sitting in camp chairs side by side facing mountain sunset vista. Back view. Peaceful, contemplative. One person gently reaching toward the other in support. Warm golden hour lighting. Mountains in distance. Soft oranges and purples in sky. Professional photography. Photorealistic. Represents sibling connection and support. 8k resolution.',
    description: 'Two people in chairs - sibling bond'
  }
];

async function generateImage(imagePrompt: ImagePrompt): Promise<boolean> {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const publicDir = path.join(process.cwd(), 'public', 'images');

  // Create directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    console.log(`\n[${imagePrompt.name}]`);
    console.log(`  Description: ${imagePrompt.description}`);
    console.log(`  Generating...`);

    // Generate image using Gemini
    const imageResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: imagePrompt.prompt }] }
    });

    // Extract base64 image data
    let imageBase64 = "";
    let mimeType = "";

    if (imageResponse.candidates?.[0]?.content?.parts) {
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          imageBase64 = part.inlineData.data;
          mimeType = part.inlineData.mimeType;
          console.log(`  ✓ Image generated (${Math.round(imageBase64.length / 1024)}KB)`);
          break;
        }
      }
    }

    if (!imageBase64) {
      console.log(`  ✗ No image data returned`);
      return false;
    }

    // Determine file extension
    const extension = mimeType.includes('png') ? 'png' : 'jpg';
    const filePath = path.join(publicDir, `${imagePrompt.name}.${extension}`);

    // Write image to file
    const buffer = Buffer.from(imageBase64, 'base64');
    fs.writeFileSync(filePath, buffer);
    console.log(`  ✓ Saved to public/images/${imagePrompt.name}.${extension}`);

    return true;

  } catch (error: any) {
    console.error(`  ✗ Error:`, error.message);
    if (error.response) {
      console.error(`  Details:`, error.response.data || error.response);
    }
    return false;
  }
}

async function main() {
  console.log("=".repeat(60));
  console.log("SIBLING STRONG: Outdoor Image Generation");
  console.log("=".repeat(60));
  console.log(`Generating ${imagePrompts.length} comforting outdoor images...`);
  console.log(`Model: gemini-2.5-flash-image`);
  console.log("");

  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;

  for (const imagePrompt of imagePrompts) {
    const result = await generateImage(imagePrompt);
    if (result) {
      successCount++;
    } else {
      failCount++;
    }

    // Delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);

  console.log("\n" + "=".repeat(60));
  console.log("IMAGE GENERATION COMPLETE");
  console.log("=".repeat(60));
  console.log(`✓ Success: ${successCount}/${imagePrompts.length} images generated`);
  console.log(`✗ Failed: ${failCount}/${imagePrompts.length}`);
  console.log(`⏱ Time elapsed: ${elapsed}s`);
  console.log(`📁 Images saved to: public/images/`);
  console.log("=".repeat(60));
}

main();
