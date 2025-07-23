import { generatePdfFromImages, processImages } from '#services';
import { cleanupFiles } from '#utils';
import { Request, Response } from 'express';
import path from 'path';

export const handleImageUpload = async (req: Request, res: Response) => {
  
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No images uploaded' });
  }

  const files = req.files as Express.Multer.File[];
  const filePaths = files.map(file => path.resolve(file.path));

  let processedPaths: string[] = [];
  try {
    processedPaths = await processImages(filePaths);
    const pdfBuffer = await generatePdfFromImages(processedPaths);

    // TODO update filename
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=claims-${new Date().toISOString()}.pdf`);
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({
      details: error instanceof Error ? error.message : String(error),
      error: 'Internal Server Error',
      success: false,
    });
  } finally {
    await cleanupFiles(filePaths);
    await cleanupFiles(processedPaths);
  }
};
