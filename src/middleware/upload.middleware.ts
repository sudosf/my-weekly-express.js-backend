import { FILE_UPLOAD, PATHS } from '#config';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: PATHS.UPLOADS_DIR,
  filename: (_, file, cb) => {

    const timestamp = Date.now();
    const cleanName = file.originalname.replace(/\s+/g, '-');

    cb(null, `${String(timestamp)}-${cleanName}`);
  },
});

const upload = multer({
  fileFilter: (_, file, cb) => {
    const allowed = FILE_UPLOAD.ALLOWED_MIME_TYPES;

    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only JPEG/PNG files allowed'));
  },
  limits: { fileSize: FILE_UPLOAD.MAX_SIZE_MB * 1024 * 1024 },
  storage
});

export const uploadImages = upload.array(FILE_UPLOAD.FIELD_NAME, FILE_UPLOAD.MAX_FILES);
