import styles from "./styles.module.css";
import { BiEuro } from "react-icons/bi";
import { FaAward, FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Model = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.firstSection} max-width`}>
        <div className={styles.header}>
          <div className={styles.imageSide}>
            <img className={styles.image} src="" alt="" />
          </div>
          <div className={styles.contentSide}>
            <h4 className={styles.title}>
              En Güzel Fotoğrafların Yıldızı Olun!
            </h4>
            <div className={styles.yellowLine}></div>
            <p className={styles.preDescription}>
              Dev Markaların Çalışmak İsteyeceği Bir Fotomodel Haline Gelin!..
              Model Akademi Fotomodellik Kursu
            </p>
            <p className={styles.description}>
              Moda dünyasına eşsiz karelerinizle adım atmak, fotoğrafçıların,
              markaların ve modacıların çalışmak için can attığı bir fotomodel
              haline gelerek kariyerinizi zirveye taşımak istemez misiniz?
              Yanıtınız evetse en doğru adrestesiniz!..
              <br />
              <br />
              Model Akademi fotomodellik kursu ile ışıltılı bir kariyer için ilk
              adımı atacak, yeni mesleğinizin sırlarını duayen fotomodeller ve
              usta fotoğrafçılardan eğitim alarak öğrenecek, başarılı bir
              fotomodel olmak için kariyerinize rakiplerinizden birkaç adım önde
              başlayacak, en dikkat çeken pozları siz vereceksiniz!..
              <br />
              <br />
              Siz de Model Akademi ayrıcalıklarından yararlanacağınız bir
              fotomodellik eğitimi için daha fazla vakit kaybetmeyin, hayatınızı
              ve kariyerinizi yeni baştan yaratmak için hemen bizimle iletişime
              geçin!..
            </p>
            <div className={styles.backgroundOverlay}>
              <p className={styles.description}>
                Her yıl fotomodellik eğitimi almaya başlayan öğrencilerin %65’i
                yanlış kurs tercihleri ve kalitesiz eğitim içerikleri nedeniyle
                iyi eğitim alamadıkları için hayallerinden vazgeçiyor.
              </p>
            </div>

            <div className={styles.contactButtons}>
              <div className={styles.discoverBtn}>Eğitim İçeriğini İncele</div>
              <div className={styles.contactBtn}>
                Eğitim Danışmanından Bilgi Al
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageCarousel}>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
          <div className={styles.carouselItem}>
            <img className={styles.carouselImg} src="" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className={`${styles.secondSection}`}>
        <div className={`${styles.courseOffer} max-width`}>
          <div className={`${styles.courseOfferContainer}`}>
            <BiEuro className={`${styles.icon}`} />
            <div className={`${styles.infos}`}>
              <p className={`${styles.title}`}>Erken Kayıtta %50 İndirim</p>
              <p className={`${styles.details}`}>Son 4 Kontenjan</p>
            </div>
          </div>
          <div className={`${styles.courseOfferContainer}`}>
            <FaAward className={`${styles.icon}`} />
            <div className={`${styles.infos}`}>
              <p className={`${styles.title}`}>Seviye</p>
              <p className={`${styles.details}`}>Tüm Seviyeler</p>
            </div>
          </div>
          <div className={`${styles.courseOfferContainer}`}>
            <FaCalendarAlt className={`${styles.icon}`} />
            <div className={`${styles.infos}`}>
              <p className={`${styles.title}`}>Süre</p>
              <p className={`${styles.details}`}>12 Hafta 36 Saat</p>
            </div>
          </div>
          <div className={`${styles.courseOfferContainer}`}>
            <IoIosPeople className={`${styles.icon}`} />
            <div className={`${styles.infos}`}>
              <p className={`${styles.title}`}>Kontenjan</p>
              <p className={`${styles.details}`}>12 Kişi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
