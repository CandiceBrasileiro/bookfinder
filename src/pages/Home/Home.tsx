// import { useState} from 'react';
// import styles from './Home.module.css';
// import { FaSearch } from "react-icons/fa";
// import Card from '../components/Card/Card';
// import axios from 'axios';
// import { CBooks } from '../../entities/CBooks';

// const Home = () => {

//   const [search, setSearch] = useState("");
//   const [bookData, setBookData] = useState([]);
  
  
//   const heandleSearchBook = () => {
//     // e.preventDefault();
    
//    const GETBOOKS: CBooks{} = axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCCAAqjtJh-HCUDD0KFpSrtUm5k2_EIos0')
//     .then((response) => {
//       if(response){
//         setBookData(response.data.items);
//       }
      
//     })
//     .catch(error => {
//       return error;
//     })
//   }
  
//   return (
//     <div className={styles.container}>
//     <div className={styles.text}>
//       <p><span>Find</span> your favorite books</p>
//       <hr />
//     </div>
//     <div className={styles.search_area}>
//       <form onSubmit={heandleSearchBook}>
//         <input type="text" placeholder='Type author, title...' />
//         <button>
//           <FaSearch />
//         </button>
//       </form>
//     </div>
//     <div>
//       { GETBOOKS.map
//         <Card key={} />
//       }
//     </div>
//     </div>

    
        
//   )
// }

// export default Home;