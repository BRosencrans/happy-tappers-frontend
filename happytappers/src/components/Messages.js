import React, { useState } from 'react';

const Messages = ({ socket, username, roomid }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
     
      socket.emit('send_message', { username, roomid, message});
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
      <button id="btn" type="submit"  onClick={sendMessage}>
       Press to send
      </button>
    </div>
  );
};

export default Messages;