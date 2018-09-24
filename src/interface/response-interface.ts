import {IMessage} from "../models/message-model";

export interface IResponse {
  error: boolean,
  status: number,
  messages?: Array<IMessage>
}