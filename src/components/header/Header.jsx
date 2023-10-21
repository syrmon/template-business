import ContactBox from "../contactBox/ContactBox";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.container} max-width`}>
        <ContactBox />
      </div>
    </div>
  );
};
export default Header;
