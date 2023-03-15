import React, { useState, useContext } from 'react';
import { SocketContext } from "../utils/SocketHelper"
import {  Button } from "react-bootstrap";


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
      <Button id="btn" type="submit"  onClick={newMessage}>
       Press to send
      </Button>
    </div>
  );
};

export default Messages;