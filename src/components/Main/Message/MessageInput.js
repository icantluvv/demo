// MessageInput.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Main.module.css'
import send from './send.svg'

const MessageInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');
  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleSendMessage = async () => {
    const messageData = {
      text: inputText,
    };
    try {

      // Отправляем сообщение на сервер
      const response = await axios.post('http://46.147.115.140:8080', messageData,{
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const jsonObject = response.data
      const jsonKeyName = 'predicted_topic'
      const jsonKeyChance = 'value'

      const tostrJsonName = JSON.stringify(jsonObject[jsonKeyName])
      const tostrJsonChance = JSON.stringify(jsonObject[jsonKeyChance])

      const tosend  = `This text has  ${tostrJsonName} type by my opinion. Chance of this: ${tostrJsonChance}`
      const userMessage = inputText

      onSendMessage(userMessage);
      setInputText('');
      onSendMessage(tosend);


    } 
    catch (error) {
      console.error('Error sending message:', error);
    }
    
  };


  return (
    <div className={styles.enterbox}>
      <input type="text" value={inputText} onChange={handleInputChange} className={styles.inptxt}></input>
      <button onClick={handleSendMessage} className={styles.sendbutton}><img src={send} alt=''/></button>
    </div>
  );
};

export default MessageInput;
