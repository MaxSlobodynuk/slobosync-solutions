import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

export const bootstrap = async () => {
  await initMongoDB();

  startServer();
};

bootstrap();
