import RouterAbstract from '../router-abstract'
import MessageRoute from './message-route'

class Api extends RouterAbstract {
  
  private static instance = new Api();
  
  constructor() {
    if (!!Api.instance) return Api.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.router.use('/messages', MessageRoute.route);
  }
  
}

export default new Api;