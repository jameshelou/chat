import React from 'react';
import styles from './Header.module.css'

const Header = props => {
  return (
    <div className={styles.Header}>
      <img src={props.activeUser.profile_pic} className={styles.Header__img} alt={'active user profile pic'}/>

      <div className={styles.Header__infoSection}>
        <h1 className={styles.Header__name}>{props.activeUser.name}</h1>
        <p className={styles.Header__status}>{props.activeUser.status}</p>
      </div>
    </div>
  );
}

export default Header;