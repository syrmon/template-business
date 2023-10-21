import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

const HamburgerMenu = ({ updater }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.closeBtn} onClick={() => updater(false)}>
          X
        </div>
      </div>
      <span
        className={`${
          window.location.pathname === "/" ? styles.selected : styles.link
        }`}
        onClick={() => {
          navigate("/");
          updater(false);
        }}
      >
        Home
      </span>
      <span
        className={
          window.location.pathname === "/web-design"
            ? styles.selected
            : styles.link
        }
        onClick={() => {
          navigate("/web-design");
          updater(false);
        }}
      >
        Website Design
      </span>
      <span
        className={
          window.location.pathname === "/app-development"
            ? styles.selected
            : styles.link
        }
        onClick={() => {
          navigate("/app-development");
          updater(false);
        }}
      >
        App Development
      </span>
      <span
        className={
          window.location.pathname === "/digital-marketing"
            ? styles.selected
            : styles.link
        }
        onClick={() => {
          navigate("/digital-marketing");
          updater(false);
        }}
      >
        Digital Marketing
      </span>
    </div>
  );
};

export default HamburgerMenu;
