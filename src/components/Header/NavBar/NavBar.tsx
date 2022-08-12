import styles from "./navBar.module.css";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconNotification } from "assets/icons/notification.svg";
import { ReactComponent as IconHelp } from "assets/icons/help.svg";
import { ReactComponent as IconGlobe } from "assets/icons/globe.svg";
import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";
import PopoverNav from "./PopoverNav";
import ImageLoginNotification from "assets/images/login_notification.png";

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
        <PopoverNav
          spanElement={
            <>
              <IconNotification
                className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--notification"]}`}
              />
              Notification
            </>
          }
          popoverElement={
            <>
              <div className={styles["nav_bar__notification"]}>
                <div className={styles["nav_bar__notification--guest"]}>
                  <div className={styles["notification__login_message"]}>
                    <img
                      src={ImageLoginNotification}
                      alt={"Login to view notification"}
                    />
                    <span>Login to view notification</span>
                  </div>

                  <div className={styles["notification__authorization"]}>
                    <span>Sign up</span>
                    <span>Login</span>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <span className={styles["nav_bar__button"]}>
          <IconHelp
            className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--help"]}`}
          />
          Help
        </span>
        <PopoverNav
          spanElement={
            <>
              <IconGlobe
                className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--globe"]}`}
              />
              English
              <IconDownArrow
                className={`${styles["nav_bar__icon"]} ${styles["nav_bar__icon--down_arrow"]}`}
              />
            </>
          }
          popoverElement={
            <div className={styles["nav_bar__language"]}>
              <ul>
                <li>English</li>
                <li>简体中文</li>
                <li>Bahasa Melayu</li>
              </ul>
            </div>
          }
        />
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
