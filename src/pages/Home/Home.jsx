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
        
    }
}

export default Home;