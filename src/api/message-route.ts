import {Request, Response} from 'express'

import RouterAbstract from '../router-abstract'
import MessageController from '../controller/message-controller'

class MessageRoute extends RouterAbstract {
  
  private static instance = new MessageRoute();
  
  constructor() {
    if (!!MessageRoute.instance) return MessageRoute.instance;
    super();
    this.setRoutes();
  }
  
  private setRoutes(): void {
    this.route.get('/', this.getAllMessage);
  }
  
  private async getAllMessage(req: Request, res: Response): Promise<Response> {
    const result = await MessageController.findAll();
  
    if (result.error || result.messages === undefined) return res.sendStatus(result.status);
    if (result.messages === null) return res.sendStatus(404);
  
    return res.status(200).json({ messages: result.messages });
  }
  
}

export default new MessageRoute;