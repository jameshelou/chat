import React from 'react';
import store from '../../store/store';
import styles from './MessageInput.module.css';
import {
  setTypingValue,
  sendMessage
} from '../../actions/actions';

const MessageInput = props => {
  const messageInputHandler = e => {
    store.dispatch(setTypingValue(e.target.value))
  }

  const messageSubmitHandler = e => {
    e.preventDefault();
    
    if (props.value !== "") {
      const {typing, activeChatUserId} = store.getState();
      store.dispatch(sendMessage(typing, activeChatUserId));
    }
  }

  return (
    <form className={styles.MessageInput} onSubmit={messageSubmitHandler}>
      <input 
        className={styles.MessageInput__textField}
        onChange={messageInputHandler}
        value={props.value}
        placeholder='write a message...'/>
    </form>
  );
};

export default MessageInput;