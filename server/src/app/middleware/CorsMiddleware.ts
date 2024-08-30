import cors, { CorsOptions } from 'cors';

export default class CorsMiddleware {

  handle(options?: CorsOptions) {
     return cors(options);
  }
}