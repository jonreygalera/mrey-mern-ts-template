import RoutesProvider from './RoutesProvider';
import SystemProvider from './SystemProvider';

export default class RegisterProvider extends SystemProvider {

  handle() {
    (new RoutesProvider).handle(this.appKernel);
  }
}
