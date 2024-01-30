import { useState} from 'react';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";
import { Book } from '../../interfaces';
import { getBooks } from '../../Api';
import { Card } from '../components/Card';

const Home = () => {

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState<Book>({} as Book);
    const [booksData, setBooksData] = useState<Book[]>([]);


    const handlerSearch:React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        getBooks(search).then((items)=>{
            setBooksData(items)
        })
    }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <p><span>Find</span> your favorite books</p>
            <hr />
        </div>
        <div className={styles.search_area}>
            <form onSubmit ={handlerSearch}>
                <input 
                type="text" 
                placeholder='Type author, title...'
                value={search} 
                onChange={e=>setSearch(e.target.value)} 
                />
                <button type='submit' className={styles.btn} >
                    <FaSearch />
                </button>
            </form>
        </div>
        <div className={styles.card}>       
            {booksData && booksData.map((item))=>{(
                <Card book={item} />
            )}}
        </div>
    </div>
</>

  )
}

export default Home;