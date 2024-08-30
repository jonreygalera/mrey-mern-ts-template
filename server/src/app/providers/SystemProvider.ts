import IAppKernel from "../../bootstrap/interfaces/IAppKernel";
import GlobalMiddlewareProvider from "./GlobalMiddlewareProvider";

export default abstract class SystemProvider {
  constructor(public appKernel: IAppKernel) {}

  register() {
    (new GlobalMiddlewareProvider).handle(this.appKernel);
    this.handle();
  }

  abstract handle() : void;
}