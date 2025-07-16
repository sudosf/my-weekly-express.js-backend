import { imageSizeFromFile } from 'image-size/fromFile';

export const getImageSize = async (imagePath: string): Promise<{ height: number; width: number; }> => {
  const dimensions = await imageSizeFromFile(imagePath);

  if (!dimensions.width || !dimensions.height) throw new Error('Invalid image: Failed to get dimensions');

  return { height: dimensions.height, width: dimensions.width };
};
