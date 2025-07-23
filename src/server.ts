
import { logger } from '#utils';

import app from './app.js';

// TODO use config
const PORT = process.env.PORT ?? '3000';

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
