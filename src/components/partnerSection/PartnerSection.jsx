import styles from "./styles.module.css";
import partnerOneImg from "../../assets/partnerSlack.png";
import partnerTwoImg from "../../assets/partnerAudioJungle.png";

const PartnerSection = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={partnerOneImg}
        alt="Partner Firm Logo"
      />
      <img
        className={styles.logo}
        src={partnerTwoImg}
        alt="Partner Firm Logo"
      />
    </div>
  );
};

export default PartnerSection;
