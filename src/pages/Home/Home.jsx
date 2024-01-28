import { useState} from 'react';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";
import Card from '../components/Card/Card';
import axios from 'axios';

const Home = () => {

    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);

    const heandleSearchBook = (e) => {
        e.preventDefault();

        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCCAAqjtJh-HCUDD0KFpSrtUm5k2_EIos0' + '&maxResults=40')
        .then((response) => {

            if(response){
                console.log('resp', response)
                setBookData(response.data.items);
            }
        })
        .catch(error => {
            return error;
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
                    <button type='submit'>
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div>          
            <Card book={bookData} /> 
        
            </div>
        </div>
    )
}

export default Home;