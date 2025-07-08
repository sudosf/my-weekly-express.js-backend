import app from './app.js';

// TODO use config
const PORT = process.env.PORT ?? '3000';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
