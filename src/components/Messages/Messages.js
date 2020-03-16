import React, { useRef, useEffect } from 'react';
import Message from '../Message/Message';
import styles from './Messages.module.css';

const Messages = props => {
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }
  
  useEffect(() => {
    scrollToBottom();
  })

  return (
    <div className={styles.Messages} ref={messagesRef}>
      {props.activeMsgs.map(message => 
        <Message content={message.text} isUserMsg={message.is_user_msg} key={message.number}/>)}
    </div>
  );
}

export default Messages;