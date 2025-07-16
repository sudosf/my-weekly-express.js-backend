import { handleImageUpload } from '#controllers';
import { uploadImages } from '#middleware';
import { Router } from 'express';

const router = Router();

router.post('/upload', uploadImages, handleImageUpload);

export default router;
