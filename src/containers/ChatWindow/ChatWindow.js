import React from 'react';
import _ from 'lodash';
import store from '../../store/store';
import Header from '../../components/Header/Header';
import Messages from '../../components/Messages/Messages';
import MessageInput from '../MessageInput/MessageInput';
import styles from './ChatWindow.module.css';

const ChatWindow = props => {
  const state = store.getState();
  const activeUser = state.contacts[props.activeChatUserId];
  const activeMsgs = state.messages[props.activeChatUserId];
  const typing = state.typing;

  return (
    <div className={styles.ChatWindow}>
      <Header activeUser={activeUser} />
      <Messages activeMsgs={_.values(activeMsgs)} />
      <MessageInput value={typing}/>
    </div>
  );
}

export default ChatWindow;