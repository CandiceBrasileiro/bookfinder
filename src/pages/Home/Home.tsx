import { useState} from 'react';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";

const Home = () => {

    const [search, setSearch] = useState("");

    const handleSearch: React.ChangeEventHandler = (e) => {
        e.preventDefault();

        
    }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.text}>
            <p><span>Find</span> your favorite books</p>
            <hr />
        </div>
        <div className={styles.search_area}>
            <form >
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
                  
        </div>
    </div>
</>

  )
}

export default Home;