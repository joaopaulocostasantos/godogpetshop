import styles from "./styles.module.scss";

// Icons
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.social}>
        <div className={styles.insta}>
          <FaInstagram />
        </div>
        <div className={styles.linkedin}>
          <FaLinkedinIn />
        </div>
        <div className={styles.twitter}>
          <FaTwitter />
        </div>
        <div className={styles.whatsapp}>
          <FaWhatsapp />
        </div>
      </div>
      <p>R. João Câmara, nº 15 - Natal/RN, 59010-000</p>
      <p>
        Desenvolvido por{" "}
        <a href="https://www.behance.net/joaopaulocsantos">João Paulo Santos</a>
      </p>
    </footer>
  );
}
