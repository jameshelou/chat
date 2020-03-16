import React from 'react';
import styles from './Message.module.css';

const Message = props => {
  const msgClass = props.isUserMsg ? styles.Message__user : styles.Message__notUser;
  return (
    <div className={`${styles.Message} ${msgClass}`}>
      {props.content}
    </div>
  );
}

export default Message;