import { app } from './app';

// main
(async () => {
  const port = process.env.PORT || 3001;

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });

  server.on('error', console.error);
})();
