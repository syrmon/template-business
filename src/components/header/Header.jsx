import { useState } from "react";
import ContactBox from "../contactBox/ContactBox";
import styles from "./styles.module.css";
import ContactPanel from "../contactModule/ContactPanel";

const Header = ({ text }) => {
  const [status, setStatus] = useState(false);

  const statusUpdater = (value) => {
    setStatus(value);
  };

  return (
    <div className={styles.background}>
      {status && <ContactPanel uploader={statusUpdater} />}
      <div className={`${styles.container} max-width`}>
        <ContactBox uploader={statusUpdater} text={text} />
      </div>
    </div>
  );
};
export default Header;
