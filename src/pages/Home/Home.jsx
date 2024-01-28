import { useState} from 'react';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";
import Card from '../components/Card/Card';
import {getBooks} from '../../api';

const Home = () => {

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);


    const heandleSearchBook = (e) => {
        e.preventDefault();

        const books = getBooks(search).then((books) => {
            console.log('books', books)
            if (books) {
                setBookData(books);
            }
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p><span>Find</span> your favorite books</p>
                <hr />
            </div>
            <div className={styles.search_area}>
                <form onSubmit={heandleSearchBook}>
                    <input 
                    type="text" 
                    placeholder='Type author, title...'
                    value={search} 
                    onChange={e=>setSearch(e.target.value)} 
                    />
                    <button type='submit' className={styles.btn}>
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className={styles.card}>       
                { 
                    bookData.map((books) => {
                        console.log('books', books)
                        return <Card book={books} />
                    })
                }           
            </div>

            
        </div>
    )
}

export default Home;