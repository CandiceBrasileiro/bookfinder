import React from 'react';
import ButtonMore from '../Button/Button';
import styles from './Card.module.css';

const Card = ({book}) => {
    console.log('book', book)
    return(
        <div className={styles.card}>
            <div className={styles.img}>
            <img src={book.thumbnail} alt='' />
            </div>   
            <div className={styles.info}>
                <p className='title'><span>Title: </span> {book.title}</p>
                <p className='author'><span>Authors: </span>{book.author}</p>
            </div>     
            <ButtonMore />       
        </div>
    )
}

export default Card;