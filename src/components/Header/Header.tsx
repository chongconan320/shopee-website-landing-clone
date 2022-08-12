import styles from "./header.module.css";
import Logo from "components/General/logo.svg";
import SearchBar from "./SearchBar";
import { ReactComponent as IconCart } from "assets/icons/cart.svg";
import Wrapper from "components/General/Wrapper";
import NavBar from "./NavBar";
const Header = () => {
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
  return (
    <Wrapper
      containerStyle={styles["header"]}
      contentStyle={styles["header__content"]}
    >
      <div className={styles["header__navbar"]}>
        <NavBar />
      </div>
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
  );
};
export default Header;
