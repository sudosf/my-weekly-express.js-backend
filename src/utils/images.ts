import { logger } from '#utils';
import fs from 'fs/promises';
import { imageSizeFromFile } from 'image-size/fromFile';

export const getImageSize = async (imagePath: string): Promise<{ height: number; width: number; }> => {
  const dimensions = await imageSizeFromFile(imagePath);

  if (!dimensions.width || !dimensions.height) throw new Error('Invalid image: Failed to get dimensions');

  return { height: dimensions.height, width: dimensions.width };
};


export const cleanupFiles = async (paths: string[]) => {

  for (const path of paths) {
    try {
      await fs.unlink(path);
    } catch (err) {
      logger.warn({ err, path }, 'Failed to delete file');
    }
  }
};
