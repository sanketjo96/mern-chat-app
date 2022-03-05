import express from 'express';
import { chats } from './data/index.js';

const PORT = process.env.PORT || 5001;
const app = express();

app.get('/api/chats', (req, res) => res.send(chats));

app.listen(PORT, () => {
  console.log(`Server started: ${PORT}`);
});
