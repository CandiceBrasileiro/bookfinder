import ButtonMore from "../components/Button/Button"

import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>

        <p>Find your favorite books</p>
        <ButtonMore />
    </div>
  )
}

export default Home;