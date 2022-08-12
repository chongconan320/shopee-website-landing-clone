import styles from "./navBar.module.css";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconNotification } from "assets/icons/notification.svg";
import { ReactComponent as IconHelp } from "assets/icons/help.svg";
import { ReactComponent as IconGlobe } from "assets/icons/globe.svg";
import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";

const NavBar = () => {
  return (
    <div className={styles["nav_bar"]}>
      <div className={styles["nav_bar__left"]}>
        <span className={styles["nav_bar__button"]}>Seller Center</span>
        <span className={styles["nav_bar__button"]}>Download </span>
        <span>
          Follow us on
          <IconFacebook
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--facebook"]} ${styles["nav_bar__button"]}`}
          />
          <IconInstagram
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__button"]}`}
          />
        </span>
      </div>
      <div className={styles["nav_bar__right"]}>
        <span className={styles["nav_bar__button"]}>
          <IconNotification
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--notification"]}`}
          />
          Notification
        </span>
        <span className={styles["nav_bar__button"]}>
          <IconHelp
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--help"]}`}
          />
          Help
        </span>
        <span className={styles["nav_bar__button"]}>
          <IconGlobe
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--globe"]}`}
          />
          English
          <IconDownArrow
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--down_arrow"]}`}
          />
        </span>
        <span
          className={`${styles["nav_bar__button"]} ${styles["nav_bar__authorization"]}`}
        >
          Sign Up
        </span>
        <span
          className={`${styles["nav_bar__button"]} ${styles["nav_bar__authorization"]}`}
        >
          Login
        </span>{" "}
      </div>
    </div>
  );
};
export default NavBar;
