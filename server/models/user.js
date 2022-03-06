import mongoose from 'mongoose';

const { Schema } = mongoose;
const userModel = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  picture: { type: String, default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg' },
  timestamps: true,
});

export const user = mongoose.model('User', userModel);
