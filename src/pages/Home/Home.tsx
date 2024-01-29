import { useState} from 'react';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";
import { Book } from '../../interfaces';
import { getBooks } from '../../Api';

const Home = () => {

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState<Book>({} as Book);

    const handleSearch: React.ChangeEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const books:Book[] = getBooks(search).then((book:Book) => {
            if (book) {
                setBookData(book);
            }
        });
    }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <p><span>Find</span> your favorite books</p>
            <hr />
        </div>
        <div className={styles.search_area}>
            <form onSubmit ={handleSearch}>
                <input 
                type="text" 
                placeholder='Type author, title...'
                value={search} 
                onChange={e=>setSearch(e.target.value)} 
                />
                <button type='submit' >
                    <FaSearch />
                </button>
            </form>
        </div>
        <div className={styles.card}>       
            {
                
            }
        </div>
    </div>
</>

  )
}

export default Home;