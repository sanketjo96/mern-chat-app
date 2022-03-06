import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Chats = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios('api/chats');
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  );
};
