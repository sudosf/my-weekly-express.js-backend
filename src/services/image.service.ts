import sharp from 'sharp';

export const processImages = async (imagePaths: string[]): Promise<string[]> => {

  const outputPaths: string[] = [];

  for (const imagePath of imagePaths) {
    // Rename file by appending "_processed" before the extension
    const outputPath = imagePath.replace(/(\.\w+)$/, '_processed$1');

    await sharp(imagePath)
      .resize({ width: 800 })
      .toFile(outputPath);

    outputPaths.push(outputPath);
  }

  return outputPaths;
};
