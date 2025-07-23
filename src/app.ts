import uploadRoutes from '#routes';
import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Serve static files (if needed)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', uploadRoutes);

export default app;
