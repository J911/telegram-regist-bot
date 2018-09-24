import {Message, IMessage} from '../models/message-model'
import {IResponse} from "../interface/response-interface";

class MessageController {
  
  public async findAll(): Promise<IResponse> {
    let messages: Array<IMessage>;
    try { messages = await Message.find({}) }
    catch (e) { return { error: true, status: 500 } }
    return { error: false, status: 200, messages };
  }
  
  public async create(message: IMessage): Promise<IResponse> {
    if (message === undefined) return { error: true, status: 400 };
    
    try {
      await Message.create(message)
    }
    catch (e) { return { error: true, status: 500 } }
    return { error: false, status: 201 };
  }
  
}

export default new MessageController;