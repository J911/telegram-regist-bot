import * as mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  userId: number,
  userFirstName: string,
  userLastName: string,
  userName: string,
  text: string
}

const MessageSchema = new mongoose.Schema ({
  userId: Number,
  userFirstName: String,
  userLastName: String,
  userName: String,
  text: String,
  created : {
    type : Date,
    default : Date.now
  }
});

mongoose.model('Message', MessageSchema);

export const Message = mongoose.model('Message');