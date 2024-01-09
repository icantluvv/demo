// MessageList.js
import React from 'react';
import styles from '../Main.module.css'

const MessageList = ({ messages }) => {
  console.log('Messages in MessageList:', messages);
  return (
    <div className={styles.messagelist}>
      {messages.map((message, index) => (
        <div className={styles.newmessage} key={index + message}>{message}</div>
      ))}
    </div>
  );
};

export default MessageList;
