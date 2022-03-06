import mongoose from 'mongoose';

const { Schema } = mongoose;
const chatModel = new Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  timestamps: true,
});

export const chat = mongoose.model('Chat', chatModel);
