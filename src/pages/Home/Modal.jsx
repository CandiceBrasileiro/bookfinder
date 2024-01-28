import React from 'react';
import styles from './Home.module.css';

const Modal = () => {
  return (
    <div className={styles.modal_box}>
      <div className={styles.modal_img}>
        <img src="" alt="" />
      </div>
      <div className={styles.modal_info}>

      </div>
      <div className={styles.modal_description}>
        <p>Book Description</p>
      </div>
    </div>
  )
}

export default Modal;