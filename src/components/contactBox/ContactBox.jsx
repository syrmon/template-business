import styles from "./styles.module.css";

const ContactBox = (props) => {
  const html = document.querySelector("html");
  const { branch, title, description } = props.text;

  return (
    <div className={styles.container}>
      <h3 className={styles.branch}>{branch}</h3>

      <h4 className={styles.title}>{title}</h4>

      <p className={styles.description}>{description}</p>

      <div
        className={styles.contactButton}
        onClick={() => {
          props.uploader(true);
          html.style.overflow = "hidden";
        }}
      >
        Contact Us
      </div>
    </div>
  );
};
export default ContactBox;
