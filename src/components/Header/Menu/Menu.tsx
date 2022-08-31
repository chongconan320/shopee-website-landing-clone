import styles from "./menu.module.css";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconGlobe } from "assets/icons/globe.svg";
import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";
import { ReactComponent as IconNotification } from "assets/icons/notification.svg";
import { ReactComponent as IconHelp } from "assets/icons/help.svg";
import { ReactComponent as IconCart } from "assets/icons/cart.svg";

interface IMenu {
  isMenuExpanded: boolean;
}

const Menu = ({ isMenuExpanded }: IMenu) => {
  return (
    <div
      className={`${styles["menu"]} ${isMenuExpanded && styles["menu--open"]}`}
    >
      <ul className={styles["menu__list"]}>
        <li>
          <span>Sign Up</span>
          <span>|</span>
          <span>Login</span>
        </li>{" "}
        <li>
          <IconCart
            className={`${styles["menu__icon"]} ${styles["footer__icon--cart"]}`}
          />
          Cart
        </li>
        <li>
          <IconNotification
            className={`${styles["menu__icon"]} ${styles["footer__icon--notification"]} `}
          />
          Notification
        </li>
        <li>
          <IconHelp
            className={`${styles["menu__icon"]} ${styles["footer__icon--help"]}`}
          />
          Help
        </li>
      </ul>
      <div className={styles["menu__footer"]}>
        <div className={styles["footer__nav_bar"]}>
          <div className={styles["footer__nav_bar--left"]}>
            <span>Seller Center</span>
            <span>Download</span>
            <span>
              Follow us on <IconFacebook className={styles["footer__icon"]} />
              <IconInstagram className={styles["footer__icon"]} />
            </span>
          </div>
          <div className={styles["footer__nav_bar--right"]}>
            <span>
              <div className={styles["footer__language_popup"]}>
                <ul>
                  <li>English</li>
                  <li>Malay</li>
                  <li>简体中文</li>
                </ul>
              </div>
              <IconGlobe className={styles["footer__icon"]} /> English{" "}
              <IconDownArrow
                className={` ${styles["footer__icon--down_arrow"]}`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
