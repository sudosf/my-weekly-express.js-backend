import sharp from 'sharp';

const resizeImage = async (inputPath: string, outputPath: string, width = 800) => {

  await sharp(inputPath)
    .resize({ width })
    .toFile(outputPath);
};

export const processImages = async (imagePaths: string[]): Promise<string[]> => {

  const outputPaths: string[] = [];

  for (const imagePath of imagePaths) {
    // Rename file by appending "_processed" before the extension
    const outputPath = imagePath.replace(/(\.\w+)$/, '_processed$1');

    await resizeImage(imagePath, outputPath);

    outputPaths.push(outputPath);
  }

  return outputPaths;
};
