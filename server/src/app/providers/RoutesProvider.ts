import IAppKernel from '../../bootstrap/interfaces/IAppKernel';
import { apiRouter } from '../../routes';

export default class RoutesProvider {

  handle(appKernel: IAppKernel) : void {
    appKernel.appExpress.use('/api', apiRouter);
  }
  
}