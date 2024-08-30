import IAppKernel from '../../bootstrap/interfaces/IAppKernel';
import CorsMiddleware from '../middleware/CorsMiddleware';
import JsonParseMiddleware from '../middleware/JsonParseMiddleware';
import UrlencodeMiddleware from '../middleware/UrlencodedMiddleware';

export default class GlobalMiddlewareProvider {

  boot(appKernel: IAppKernel) {

    const middlewares : any[] = [
      (new CorsMiddleware).handle(),
      (new JsonParseMiddleware).handle(),
      (new UrlencodeMiddleware).handle(),
    ];

    return middlewares.map((middleware) => appKernel.appExpress.use(middleware));
  }
  
  handle(appKernel: IAppKernel) : void {
    this.boot(appKernel);
  }
  
}