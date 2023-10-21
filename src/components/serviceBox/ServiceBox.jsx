import styles from "./styles.module.css";
import DesignImg from "../../assets/design.png";
import AppDevImg from "../../assets/app-development.png";
import DigiMarkImg from "../../assets/digital-marketing.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const ServiceBox = ({ title, description, subServices, iconName }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src={
          iconName === "Design"
            ? DesignImg
            : iconName === "AppDev"
            ? AppDevImg
            : DigiMarkImg
        }
        alt=""
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {subServices.map((c) => {
        return (
          <div key={c} className={styles.subServiceContainer}>
            <AiOutlineArrowRight className={styles.arrow} />
            <p className={styles.subService}>{c}</p>
          </div>
        );
      })}
      <AiOutlinePlus className={styles.linkOpenBtn} />
    </div>
  );
};

export default ServiceBox;
