const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");
const https = require("https");

const API_KEY = "AIzaSyCrXIV63EiQ7IvP-jod4uFfpVVv6fGueyI";
const genAI = new GoogleGenerativeAI(API_KEY);

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagePrompts = [
  {
    name: "hero-background",
    prompt: "A soft, comforting abstract gradient background with gentle blues and warm earth tones, conveying peace and support. Minimalist, calming, and appropriate for a grief support website. Horizontal 16:9 aspect ratio."
  },
  {
    name: "about-connection",
    prompt: "Two silhouettes standing side by side looking at a peaceful sunset, representing sibling connection and remembrance. Warm, comforting colors, peaceful atmosphere. Appropriate for grief support context."
  },
  {
    name: "retreats-nature",
    prompt: "Peaceful mountain landscape with a calm lake at sunrise, conveying healing and hope. Soft, warm lighting, serene and comforting. Natural outdoor setting perfect for healing retreats."
  },
  {
    name: "community-support",
    prompt: "Abstract illustration of people coming together in a supportive circle, warm and comforting colors, gentle and peaceful. Represents community and connection. Minimalist, compassionate design."
  }
];

async function generateImages() {
  console.log("Starting image generation...");
  console.log("Note: Gemini API primarily generates text. For production, consider using:");
  console.log("- DALL-E 3 via OpenAI");
  console.log("- Imagen via Google Cloud Vertex AI");
  console.log("- Stable Diffusion");
  console.log("");
  console.log("Creating placeholder images for now...");

  // Since Gemini API doesn't directly support image generation through the @google/generative-ai package,
  // we'll create placeholder images with descriptions

  for (const imagePrompt of imagePrompts) {
    const placeholderPath = path.join(imagesDir, `${imagePrompt.name}.txt`);
    const content = `Image Prompt for ${imagePrompt.name}:\n\n${imagePrompt.prompt}\n\nTo generate this image:\n1. Use DALL-E 3, Midjourney, or similar AI image generator\n2. Use the prompt above\n3. Save as ${imagePrompt.name}.jpg or .png in public/images/\n`;

    fs.writeFileSync(placeholderPath, content);
    console.log(`✓ Created prompt file: ${imagePrompt.name}.txt`);
  }

  console.log("\n✓ All image prompts saved to public/images/");
  console.log("\nTo generate actual images:");
  console.log("1. Use the prompts in the .txt files with an image AI service");
  console.log("2. Or integrate with Google's Imagen API via Vertex AI");
  console.log("3. Save generated images as .jpg or .png in public/images/");
}

// Check if @google/generative-ai is installed
try {
  require.resolve("@google/generative-ai");
  generateImages().catch(console.error);
} catch (e) {
  console.log("Installing @google/generative-ai package...");
  const { execSync } = require("child_process");
  execSync("npm install @google/generative-ai", { stdio: "inherit" });
  generateImages().catch(console.error);
}
