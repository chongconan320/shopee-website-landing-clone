import styles from "./header.module.css";
import Logo from "assets/icons/logo.svg";
import SearchBar from "./SearchBar";
import { ReactComponent as IconCart } from "assets/icons/cart.svg";
import { ReactComponent as IconHamburger } from "assets/icons/hamburger.svg";
import Wrapper from "components/General/Wrapper";
import NavBar from "./NavBar";
import Menu from "./Menu";
import { useState } from "react";
const features = [
  "Dress",
  "Kasut Perempuan",
  "Blouse",
  "Botol Air Viral",
  "Smart Watch",
  "Jersey",
  "Powerbank",
  "Tote Bag",
];
const Header = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const onToggleMenu = () => {
    setIsMenuExpanded((prev) => {
      if (prev === false) document.body.style.overflow = "hidden";
      if (prev === true) document.body.style.overflow = "auto";
      return !prev;
    });
  };
  return (
    <>
      <Wrapper
        containerStyle={styles["header"]}
        contentStyle={styles["header__content"]}
      >
        <Menu isMenuExpanded={isMenuExpanded} />
        <div className={styles["header__navbar"]}>
          <NavBar />
        </div>
        <IconHamburger
          className={styles["header__icon--hamburger"]}
          onClick={onToggleMenu}
        />{" "}
        <img src={Logo} alt={"logo"} className={styles["header__logo"]} />
        <div className={styles["header__search_bar"]}>
          <SearchBar />
        </div>
        <IconCart className={styles["header__cart"]} />
        <div className={styles["header__features"]}>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};
export default Header;
