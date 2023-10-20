import styles from "./styles.module.css";

const WhyUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.yellowLine}></div>
      <h4 className={styles.title}>
        Don’t misread here we have random & interesting facts.
      </h4>
      <h4 className={styles.description}>
        Starfish can re-grow their arms. In fact, a single arm can regenerate a
        whole body. Google’s founders were willing to sell & consult.
      </h4>
      <div className={styles.infoBoxContainer}>
        <div className={styles.infoBox}>
          <span className={styles.count}>105 +</span>
          <p className={styles.doneWork}>Team members</p>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.count}>215 +</span>
          <p className={styles.doneWork}>Client’s Feedback</p>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.count}>8 +</span>
          <p className={styles.doneWork}>Winning Awards</p>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.count}>310 +</span>
          <p className={styles.doneWork}>Completed Works</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
