import React from 'react';
import User from '../../containers/User/User';

import styles from './Sidebar.module.css';

const Sidebar = props => {
  
  return (
    <aside className={styles.Sidebar}>
      {props.contacts.map(contact => 
        <User user={contact} key={contact.user_id}/>)}
    </aside>
  );
}

export default Sidebar;