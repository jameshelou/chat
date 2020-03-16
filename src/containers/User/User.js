import React from 'react';
import store from '../../store/store';
import { setActiveChatUserId } from '../../actions/actions';

import styles from './User.module.css';

const User = props => {
  const { name, status, profile_pic } = props.user;

  const userClickedHandler = user => {
    store.dispatch(setActiveChatUserId(user.user_id));
  }

  return (
    <div className={styles.User} onClick={user => userClickedHandler(props.user)}>
      <img src={profile_pic} alt={name} className={styles.User__pic} />
      <div className={styles.User__details}>
        <p className={styles.User__name}>{name}</p>
        <p className={styles.User__status}>{status}</p>
      </div>
    </div>
  );
}

export default User;