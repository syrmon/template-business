import ContactBox from "../contactBox/ContactBox";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ContactBox />
    </div>
  );
};
export default Header;
