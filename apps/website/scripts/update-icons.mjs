import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const avatarSource = path.resolve(__dirname, '../../../test_avatar.png');

async function generateIcons() {
  console.log('Generating icons from:', avatarSource);
  const image = sharp(avatarSource);

  // 1. icon.png (512x512)
  await image.clone().resize(512, 512).png().toFile(path.join(rootDir, 'app/icon.png'));
  console.log('Generated app/icon.png');

  // 2. icon1.png (512x512)
  await image.clone().resize(512, 512).png().toFile(path.join(rootDir, 'app/icon1.png'));
  console.log('Generated app/icon1.png');

  // 3. apple-icon.png (180x180)
  await image.clone().resize(180, 180).png().toFile(path.join(rootDir, 'app/apple-icon.png'));
  console.log('Generated app/apple-icon.png');

  // 4. apple-touch-icon.png (180x180)
  await image.clone().resize(180, 180).png().toFile(path.join(rootDir, 'app/apple-touch-icon.png'));
  console.log('Generated app/apple-touch-icon.png');

  // 5. android-chrome-512x512.png
  await image.clone().resize(512, 512).png().toFile(path.join(rootDir, 'app/android-chrome-512x512.png'));
  console.log('Generated app/android-chrome-512x512.png');

  // 6. favicon-32x32.png
  await image.clone().resize(32, 32).png().toFile(path.join(rootDir, 'app/favicon-32x32.png'));
  console.log('Generated app/favicon-32x32.png');

  // 7. favicon-16x16.png
  await image.clone().resize(16, 16).png().toFile(path.join(rootDir, 'app/favicon-16x16.png'));
  console.log('Generated app/favicon-16x16.png');

  // 8. favicon.ico (32x32 png saved as ico - standard browser support)
  await image.clone().resize(32, 32).png().toFile(path.join(rootDir, 'app/favicon.ico'));
  console.log('Generated app/favicon.ico');

  // 9. web-app-manifest-192x192.png
  await image.clone().resize(192, 192).png().toFile(path.join(rootDir, 'public/web-app-manifest-192x192.png'));
  console.log('Generated public/web-app-manifest-192x192.png');

  // 10. web-app-manifest-512x512.png
  await image.clone().resize(512, 512).png().toFile(path.join(rootDir, 'public/web-app-manifest-512x512.png'));
  console.log('Generated public/web-app-manifest-512x512.png');

  // Remove icon0.svg if exists (old author trace)
  const svgPath = path.join(rootDir, 'app/icon0.svg');
  if (fs.existsSync(svgPath)) {
    fs.unlinkSync(svgPath);
    console.log('Removed old app/icon0.svg');
  }

  console.log('All icons successfully updated!');
}

generateIcons().catch(console.error);
