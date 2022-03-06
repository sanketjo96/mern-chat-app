import mongoose from 'mongoose';

const { Schema } = mongoose;
const messageModel = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
  timestamps: true,
});

export const message = mongoose.model('Message', messageModel);
