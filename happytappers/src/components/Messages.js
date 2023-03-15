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
    <div className='card-footer text-muted d-flex justify-content-start align-items-center p-3'>
      <div className='input-group mb-0'>
        <input className='form-control'
          placeholder='Type your message here'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button id="btn" type="submit"  onClick={newMessage}>
        Press to send
        </Button>
      </div>
    </div>
  );
};

export default Messages;