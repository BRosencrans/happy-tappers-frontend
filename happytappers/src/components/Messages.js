import React, { useState, useContext } from 'react';
import { SocketContext } from "../utils/SocketHelper"

const Messages = ({  username, roomId }) => {
    const socket = useContext(SocketContext)
    const [message, setMessage] = useState('');
  
    const newMessage = () => {
      if (message !== '') {
    
        socket.emit('send-message', { username, roomId, message });
        setMessage('');
      }
    };
  
  return (
    <div>
      <input
        placeholder='Type your message here'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button id="btn" type="submit"  onClick={newMessage}>
       Press to send
      </button>
    </div>
  );
};

export default Messages;