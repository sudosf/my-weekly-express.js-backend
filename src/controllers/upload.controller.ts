import { Request, Response } from 'express';

export const handleImageUpload = (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  if (files.length === 0) {
    return res.status(400).json({ error: 'No images uploaded' });
  }

  const fileNames = files.map(f => f.filename);
  res.status(200).json({ uploaded: fileNames });
};
