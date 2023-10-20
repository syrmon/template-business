import styles from "./styles.module.css";
import { RiToolsFill } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi";
import { MdPayments } from "react-icons/md";

const SetupWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blueLine}></div>
      <h4 className={styles.title}>
        There are some easy steps to work with our company!
      </h4>
      <div className={styles.progressBoxContainer}>
        <div className={styles.progressBox}>
          <RiToolsFill className={styles.icon} />
        </div>
        <h4 className={styles.progressBoxTitle}>Setup workframe</h4>
        <p className={styles.progressBoxDesc}>
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </div>
      <div className={styles.progressBoxContainer}>
        <div className={styles.progressBox}>
          <GiDiscussion className={styles.icon} />
        </div>
        <h4 className={styles.progressBoxTitle}>Consult with us</h4>
        <p className={styles.progressBoxDesc}>
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </div>
      <div className={styles.progressBoxContainer}>
        <div className={styles.progressBox}>
          <MdPayments className={styles.icon} />
        </div>
        <h4 className={styles.progressBoxTitle}>Payment & Boost</h4>
        <p className={styles.progressBoxDesc}>
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </div>
    </div>
  );
};

export default SetupWork;
