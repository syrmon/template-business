import styles from "./styles.module.css";
import { BiEuro } from "react-icons/bi";
import { FaAward, FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import imageOne from "../../../assets/picture1.jpg";
import imageTwo from "../../../assets/picture2.jpg";
import imageThree from "../../../assets/picture3.jpg";
import imageFour from "../../../assets/picture4.jpg";
import imageFive from "../../../assets/picture5.jpg";
import imageSix from "../../../assets/picture6.jpg";
import imageSeven from "../../../assets/picture7.jpg";
import imageEight from "../../../assets/picture8.jpg";
import imageNine from "../../../assets/picture9.jpg";
import imageTen from "../../../assets/picture15.jpg";
import imageEleven from "../../../assets/picture11.jpg";
import imageTwelve from "../../../assets/picture12.jpg";
import imageThirteen from "../../../assets/picture13.jpg";
import imageFourteen from "../../../assets/picture14.jpg";

const Model = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.firstSection} max-width`}>
        <div className={styles.header}>
          <div className={styles.imageSide}>
            <img className={styles.image} src={imageFourteen} alt="" />
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
            <img
              className={styles.carouselImg}
              src={imageTwelve}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.carouselImg}
              src={imageThree}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.carouselImg}
              src={imageFour}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.carouselImg}
              src={imageNine}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.carouselImg}
              src={imageEight}
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.carouselItem}>
            <img
              className={styles.carouselImg}
              src={imageSeven}
              alt=""
              srcset=""
            />
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

      <div className={`${styles.thirdSection} max-width`}>
        <div className={`${styles.contentSection}`}>
          <h4 className={`${styles.title}`}>
            Türkiye’nin En Çok Tercih Edilen Fotomodellik Kursu Model Akademi
          </h4>

          <div className={`${styles.longLine}`}></div>

          <p className={`${styles.description}`}>
            Hayallerinizin kariyerine Model Akademi ile adım atmaya hazır
            mısınız? İmajınızı ve poz verme becerilerinizi geliştiriyor, sizi
            mesleğinizin zirvesinde olmaya hazırlıyoruz! Türkiye’nin en güncel
            fotomodellik kursu programlarından yararlanın; öğrenme hızınıza,
            ilgi alanlarınıza ve grup dinamiğine göre eğitimler alın!
          </p>
        </div>

        <div className={`${styles.imageSection}`}>
          <div className={`${styles.infoContainer}`}>
            <img className={`${styles.infoImage}`} src={imageOne} alt="" />

            <h4 className={`${styles.imageTitle}`}>Alanında Ünlü Eğitmenler</h4>

            <p className={`${styles.imageDesc}`}>
              Her biri alanında ünlü, mesleğine kendini adamış, Türkiye’nin
              deneyimli ve profesyonel modellerinden fotomodellik eğitimi alma
              fırsatı.
            </p>
          </div>
          <div className={`${styles.infoContainer}`}>
            <img className={`${styles.infoImage}`} src={imageEleven} alt="" />

            <h4 className={`${styles.imageTitle}`}>Alanında Ünlü Eğitmenler</h4>

            <p className={`${styles.imageDesc}`}>
              Her biri alanında ünlü, mesleğine kendini adamış, Türkiye’nin
              deneyimli ve profesyonel modellerinden fotomodellik eğitimi alma
              fırsatı.
            </p>
          </div>
          <div className={`${styles.infoContainer}`}>
            <img className={`${styles.infoImage}`} src={imageSix} alt="" />

            <h4 className={`${styles.imageTitle}`}>Alanında Ünlü Eğitmenler</h4>

            <p className={`${styles.imageDesc}`}>
              Her biri alanında ünlü, mesleğine kendini adamış, Türkiye’nin
              deneyimli ve profesyonel modellerinden fotomodellik eğitimi alma
              fırsatı.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.fourthSection}`}>
        <div className={`${styles.contentGroup} max-width`}>
          <div className={`${styles.infoContainer}`}>
            <img src={imageFive} alt="" className={`${styles.image}`} />
            <div className={`${styles.info}`}>
              <h4 className={`${styles.title}`}>
                Fotoğrafçılar Sizinle Çalışmaya Can Atacak!
              </h4>
              <div></div>
              <p className={`${styles.preDesc}`}>
                İşinizin teknik sırlarını en iyi şekilde öğrenmeye, birikim
                sahibi bir fotomodel olarak fotoğrafçıları şaşırtmaya hazır
                mısınız?
              </p>
              <p className={`${styles.desc}`}>
                Model Akademi fotomodellik dersleri ile portre, moda ve styling
                fotoğrafçılarının en çok çalışmak istediği fotomodellerden biri
                haline gelecek, poz verme teknikleri hakkındaki bilginiz ve göz
                alıcı imajınızla fotoğraf çekim sürecini kolaylaştıracak,
                sektörde kısa zamanda adınızı duyurarak öne çıkan bir isim
                haline geleceksiniz!
                <br />
                <br />
                Başarılı bir kariyer için ilk adımlarınızı fotomodellik kursları
                ile atın, zirveye ulaşmanız çok daha kısa sürsün!
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer}  ${styles.rowReversed}`}>
            <img src={imageTen} alt="" className={`${styles.image}`} />
            <div className={`${styles.info}`}>
              <h4 className={`${styles.title}`}>
                Fotoğrafçılar Sizinle Çalışmaya Can Atacak!
              </h4>
              <div></div>
              <p className={`${styles.preDesc}`}>
                İşinizin teknik sırlarını en iyi şekilde öğrenmeye, birikim
                sahibi bir fotomodel olarak fotoğrafçıları şaşırtmaya hazır
                mısınız?
              </p>
              <p className={`${styles.desc}`}>
                Model Akademi fotomodellik dersleri ile portre, moda ve styling
                fotoğrafçılarının en çok çalışmak istediği fotomodellerden biri
                haline gelecek, poz verme teknikleri hakkındaki bilginiz ve göz
                alıcı imajınızla fotoğraf çekim sürecini kolaylaştıracak,
                sektörde kısa zamanda adınızı duyurarak öne çıkan bir isim
                haline geleceksiniz!
                <br />
                <br />
                Başarılı bir kariyer için ilk adımlarınızı fotomodellik kursları
                ile atın, zirveye ulaşmanız çok daha kısa sürsün!
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer}`}>
            <img
              src={imageThirteen}
              alt=""
              className={`${styles.image} ${styles.lastImage}`}
            />
            <div className={`${styles.info}`}>
              <h4 className={`${styles.title}`}>
                Fotoğrafçılar Sizinle Çalışmaya Can Atacak!
              </h4>
              <div></div>
              <p className={`${styles.preDesc}`}>
                İşinizin teknik sırlarını en iyi şekilde öğrenmeye, birikim
                sahibi bir fotomodel olarak fotoğrafçıları şaşırtmaya hazır
                mısınız?
              </p>
              <p className={`${styles.desc}`}>
                Model Akademi fotomodellik dersleri ile portre, moda ve styling
                fotoğrafçılarının en çok çalışmak istediği fotomodellerden biri
                haline gelecek, poz verme teknikleri hakkındaki bilginiz ve göz
                alıcı imajınızla fotoğraf çekim sürecini kolaylaştıracak,
                sektörde kısa zamanda adınızı duyurarak öne çıkan bir isim
                haline geleceksiniz!
                <br />
                <br />
                Başarılı bir kariyer için ilk adımlarınızı fotomodellik kursları
                ile atın, zirveye ulaşmanız çok daha kısa sürsün!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
