import * as Telebot from 'telebot'
import * as env from '../environment/environment-handler'
import MessageController from '../controller/message-controller'

class BotService {
  
  private static instance = new BotService();
  
  private bot;
  
  constructor() {
    if (!!BotService.instance) return BotService.instance;
    
    // @ts-ignore
    this.bot = new Telebot(env.telegram.token);
    this.bot.on('text', this.textMessageHandler.bind(this));
  }

  private textMessageHandler(msg): void {
    MessageController.create({
      userId: msg.chat.id,
      userFirstName: msg.from.first_name,
      userLastName: msg.from.last_name,
      userName: msg.from.username,
      text: msg.text || ''
    });
    this.bot.sendMessage(msg.chat.id, 'Submission complete');
  }

  private sendMessage(chatId: string, msg: string): void {
    this.bot.sendMessage(chatId, msg);
  }
  
  public start(): void {
    this.bot.start();
  }

}

export default new BotService;