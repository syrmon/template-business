import styles from "./styles.module.css";

const ContactBox = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.branch}>COACHING & CONSULTING</h3>

      <h4 className={styles.title}>Best thing for market funding.</h4>

      <p className={styles.description}>
        We Provide High Performance Networking Solutions for your IT business.
      </p>

      <div className={styles.contactButton}>Contact Us</div>
    </div>
  );
};
export default ContactBox;
