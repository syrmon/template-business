import styles from "./styles.module.css";
import logoImg from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logoImg} alt="Firm Logo" className={styles.logo} />
      </div>
      <div className={styles.hamburgerMenuContainer}>
        <GiHamburgerMenu className={styles.hamburgerMenu} />
      </div>
    </div>
  );
};
export default Navbar;
