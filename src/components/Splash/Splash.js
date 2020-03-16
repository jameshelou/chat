import React from 'react';

import styles from './Splash.module.css';

const Splash = props => {
  const { name, profile_pic, status } = props.user;
  const first_name = name.split(" ")[0];

  return (
    <div className={styles.Splash}>
      <h1>Hey, {first_name}</h1>
      <img src={profile_pic} alt={name} className={styles.Splash__profilePic} />
      <p className={styles.Splash__status}>
        <strong>Status:</strong> {status}
      </p>
      <button className={styles.Splash__button}>Start a conversation</button>
      <p className={styles.Splash__helperText}>
        Search for someone to start chatting with or choose a contact from the right
      </p>
    </div>
  );
}

export default Splash;