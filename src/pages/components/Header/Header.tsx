import Logo from './Group 1.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
        <img src={Logo} />
        <hr />
    </div>
  )
}

export default Header;