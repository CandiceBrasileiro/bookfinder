import { useState } from 'react';
import React from 'react';
import styles from './Card.module.css';
import { Modal } from '../Modal/Modal';

const Card = ({book}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [bookItem, setBookItem]=useState();
    
    return(
        <>
        <div className={styles.card}>
            <div className={styles.img}>
            <img src={book.thumbnail} alt='' />
            </div>   
            <div className={styles.info}>
                <p className='title' ><span>Title: </span> {book.title}</p>
                <p className='author' ><span>Authors: </span>{book.author}</p>
            </div> 
            <button
                className={styles.openModalBtn}
                    onClick={() => {
                        setModalOpen(true);
                        setBookItem(book)
                    }}
            >
                Open
            </button>   
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} book={bookItem} />}
        </>
        
    )
}

export default Card;