import { app } from './app';
import { setupDB } from './setup/db';

// main
(async () => {
  const port = process.env.PORT || 3001;
  await setupDB();

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });

  server.on('error', console.error);
})();
