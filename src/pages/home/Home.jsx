import Header from "../../components/header/Header";
import PartnerSection from "../../components/partnerSection/PartnerSection";
import ServiceBox from "../../components/serviceBox/ServiceBox";
import styles from "./styles.module.css";
import { BiSolidCheckShield } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import sectionImg from "../../assets/discuss.png";
import WhyUs from "../../components/whyUs/WhyUs";
import SetupWork from "../../components/setupWork/SetupWork";

const Home = () => {
  const services = [
    {
      title: "Website Design",
      description:
        "We specialise in web designing and development. Whether you need to create a new website or update the existing.",
      subServices: ["UI/UX Design", "Web Development", "Web Content writing"],
      iconName: "Design",
    },
    {
      title: "Apps Development",
      description:
        "Star It is ready to go the extra mile to ensure that you requirement is fulfilled. From eCommerce to education.",
      subServices: [
        "Android Development",
        "IOS Development",
        "Software Development",
      ],
      iconName: "AppDev",
    },
    {
      title: "Digital Marketing",
      description:
        "Generate your sales opportunity with digital marketing services from Star IT. Our strategic solutions.",
      subServices: [
        "SEO Services",
        "Link Building Services",
        "Page Optimization",
      ],
      iconName: "DigiMark",
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.servicesSection}>
        <div className={styles.serviceHeader}>
          <div className={styles.blueLine}></div>
          <h4 className={styles.title}>
            It was a very common question that What IT Service We Provide now!
          </h4>

          <p className={styles.description}>
            Collaborate Consulting exists to find the place where to being
            seemingly disparate interests meet. From that point of the
            connection, we create platforms.
          </p>
        </div>
        <div className={styles.serviceContainer}>
          {services &&
            services.map((service) => (
              <ServiceBox
                key={service.title}
                title={service.title}
                description={service.description}
                subServices={service.subServices}
                iconName={service.iconName}
              />
            ))}
        </div>
      </div>

      <PartnerSection />

      <div className={styles.aboutSection}>
        <div className={styles.infoHeader}>
          <div className={styles.blueLine}></div>
          <h4 className={styles.title}>
            There are many consulting firm in this city but clients choose us
            all time 🙂
          </h4>

          <p className={styles.description}>
            Advice on comprehensive legal solutions and legal planning on all
            aspects of business, including: issues under Company Law Exchange
            Control Regulations.
          </p>

          <div className={styles.whyUs}>
            <div className={styles.logoSide}>
              <div className={styles.logoContainer}>
                <BiSolidCheckShield className={styles.logo} />
              </div>
            </div>
            <div className={styles.infoSide}>
              <h4 className={styles.title}>Fully Secured Management</h4>
              <p className={styles.description}>
                A secured loan is a loan in which the borrower pledges some
                asset as collateral for the loan, which then becomes a secured
                debt.
              </p>
            </div>
          </div>

          <div className={styles.whyUs}>
            <div className={styles.logoSide}>
              <GiReceiveMoney className={styles.moneyLogo} />
            </div>
            <div className={styles.infoSide}>
              <h4 className={styles.title}>100% Money Back Guarantee</h4>
              <p className={styles.description}>
                Money-back guarantee is known as satisfaction guarantee,if a
                buyer is not satisfied with any product or service, a refund
                will be made.
              </p>
            </div>
          </div>
        </div>
        <img src={sectionImg} alt="" className={styles.sectionImg} />
      </div>
      <WhyUs />
      <SetupWork />
    </div>
  );
};
export default Home;
