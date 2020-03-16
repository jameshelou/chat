import React from 'react';
import Splash from '../Splash/Splash';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';
import styles from './Main.module.css';

const Main = props => {
  return (
    <main className={styles.Main}>
      {!props.activeChatUserId 
      ? <Splash user={props.user} /> 
      : <ChatWindow activeChatUserId={props.activeChatUserId}/>}
    </main>
  );
}

export default Main;