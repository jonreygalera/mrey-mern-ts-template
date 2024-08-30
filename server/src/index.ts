import kernel from './bootstrap/kernel';
import { app } from './config';

(async () => {
  try {
    const server = await kernel();
    server.listen(app.port, () => {
      console.log(`Listening to port: ${app.port}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1); // Exit the process with a failure code
  }
})();



