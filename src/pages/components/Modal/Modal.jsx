import React from 'react';
import styles from './Modal.module.css';
import { FaRegWindowClose } from "react-icons/fa";

export const Modal = ({setOpenModal, book}) => {
    return(
        <>
            <div className={styles.modalBackground}>
              <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                  <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    <FaRegWindowClose />
                  </button>
              </div>
              <div className={styles.book_cover}>
                <div>
                  <div>
                    <img src={book.thumbnail} alt='' />
                  </div>
                  <div>
                    <h2>{book.title}</h2>                  
                  </div>
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className={styles.body}>
                <p>Book description</p>
              </div>
              <div className={styles.footer}>
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button>Continue</button>
              </div>
            </div>
          </div>
        </>
    )
}

