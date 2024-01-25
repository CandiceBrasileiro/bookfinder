import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.text}>
      <p><span>Find</span> your favorite books</p>
      <hr />
    </div>
    <div className={styles.search_area}>
      <input type="text" placeholder='Type author, title...' />
    </div>
    </div>

    
        
  )
}

export default Home;