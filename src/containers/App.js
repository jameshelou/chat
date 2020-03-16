import React from 'react';
import _ from 'lodash';
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar';
import store from '../store/store';
import './App.css';

const App = () => {
  const { contacts, activeChatUserId, user } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeChatUserId={activeChatUserId}/>
    </div>
  );
}

export default App;
