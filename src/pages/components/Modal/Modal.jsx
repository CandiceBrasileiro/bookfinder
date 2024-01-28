import React from 'react';
import styles from './Modal.module.css';
import { FaRegWindowClose } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

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
                <div className={styles.grid_container}>
                  <div className={styles.img}>
                    <img src={book.thumbnail} alt='' />
                  </div>
                  <div className={styles.title}>
                    <h2>{book.title}</h2>   
                    <div className={styles.infos}>   
                      <p><span>Author: </span>{book.author}</p>        
                      <p><span>Publisher: </span>{book.publisher}</p>    
                      <p><span>Published date: </span>{book.publishedDate}</p>
                      <p><span>Pages: </span>{book.pageCount}</p>
                    </div>
                  </div>             
                </div>
              </div>
              <div className={styles.body}>
                <p><span>Book description</span></p>
                <p>{book.description}</p>
              </div>
              <div className={styles.footer}>
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Close
                </button>
                <button>Google Play  <FaGooglePlay /></button>
              </div>
            </div>
          </div>
        </>
    )
}

