import Header from "../../../components/header/Header";
import styles from "./styles.module.css";
import developImg from "../../../assets/app-development.png";

const WebDesign = () => {
  const headerText = {
    branch: "App Development",
    title: "Best optimized Apps for your desire",
    description:
      "We Provide High Performance Networking Solutions for your IT business.",
  };

  return (
    <div>
      <Header text={headerText} />

      <div className={`${styles.servicesSection} max-width`}>
        <div className={styles.serviceHeader}>
          <div className={styles.blueLine}></div>
          <h4 className={styles.title}>We give the best Services</h4>

          <p className={styles.description}>
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden.
            <br />
            <br />
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet
          </p>
        </div>

        <div className={styles.developImgContainer}>
          <img src={developImg} alt="" className={styles.developImg} />
        </div>

        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lau dantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi archi tecto beatae vitae dicta
          sunt explicabo.
          <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>

        <div className={styles.serviceCard}>
          <h4>Success fulfill</h4>
          <p>
            A feature of great leaders is that they never stop for learning.
            Mentorship and Coaching for your leaders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
