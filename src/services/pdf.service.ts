import { getImageSize } from '#utils';
import { buffer } from 'node:stream/consumers';
import PDFDocument from 'pdfkit';


export const generatePdfFromImages = async (imagePaths: string[]): Promise<Buffer> => {

  const doc = new PDFDocument({ autoFirstPage: false });

  for (const imagePath of imagePaths) {
    const { height, width } = await getImageSize(imagePath);

    // TODO add padding, center  
    doc.addPage({ size: [width, height] });
    doc.image(imagePath, 0, 0, { height, width });
  }

  doc.end();

  return await buffer(doc);
};
