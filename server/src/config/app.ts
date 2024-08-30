import { env } from "../utils";

const app = {
  host: env('APP_HOST', 'http://127.0.0.1'),
  port: env('APP_PORT', 3001),
  locale: 'en',
};

export default app;