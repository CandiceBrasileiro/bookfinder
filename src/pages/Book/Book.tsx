import styles from './Book.module.css';

const Book = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cover}>
            Book
        </div>  
        <div className={styles.book_description}>
            Book description
        </div>  
        <div className={styles.button_container}>
            <button className={styles.btn}>Read a sample</button>
            <button className={styles.btn}>Buy this book</button>
        </div>
    </div>
  )
}

export default Book;