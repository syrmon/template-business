import styles from "./styles.module.css";
import logoImg from "../../assets/logo.png";

import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.container} max-width`}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="Logo image" className={styles.logo} />
        </div>
        <div className={styles.locationInfo}>
          <div className={styles.locationContainer}>
            <MdLocationPin className={styles.locationIcon} />
            <p className={styles.description}>
              30 Commercial Road Fratton, Australia 1-888-452-1505{" "}
            </p>
          </div>

          <div className={styles.contactContainer}>
            <BsFillTelephoneFill className={styles.contactIcon} />
            <p className={styles.description}>1-888-452-1505</p>
          </div>
        </div>
        <div className={styles.openHoursContainer}>
          <h5 className={styles.openHoursTitle}>Open Hours:</h5>
          <p className={styles.openHoursDesc}>
            Mon – Sat: 8 am – 5 pm, Sunday: CLOSED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
