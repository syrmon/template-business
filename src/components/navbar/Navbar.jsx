import styles from "./styles.module.css";
import logoImg from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
const Navbar = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState(false);

  const statusUpdater = (value) => {
    setStatus(value);
  };

  return (
    <div className={`${styles.container} max-width`}>
      <div className={styles.logoContainer}>
        <img src={logoImg} alt="Firm Logo" className={styles.logo} />
      </div>

      <div className={styles.linkContainer}>
        <span
          className={`${
            window.location.pathname === "/" ? styles.selected : styles.link
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </span>

        <span
          className={
            window.location.pathname === "/web-design"
              ? styles.selected
              : styles.link
          }
          onClick={() => navigate("/web-design")}
        >
          Website Design
        </span>
        <span
          className={
            window.location.pathname === "/app-development"
              ? styles.selected
              : styles.link
          }
          onClick={() => navigate("/app-development")}
        >
          App Development
        </span>
        <span
          className={
            window.location.pathname === "/digital-marketing"
              ? styles.selected
              : styles.link
          }
          onClick={() => navigate("/digital-marketing")}
        >
          Digital Marketing
        </span>
      </div>

      <div className={styles.hamburgerMenuContainer}>
        <GiHamburgerMenu
          className={styles.hamburgerMenu}
          onClick={() => {
            statusUpdater(true);
          }}
        />
      </div>

      {status && <HamburgerMenu updater={statusUpdater} />}
    </div>
  );
};
export default Navbar;
