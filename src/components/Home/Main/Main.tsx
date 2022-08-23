import Wrapper from "components/General/Wrapper";
import styles from "./main.module.css";

import Image_MainBanner1 from "assets/images/main_banners.jpg";
import Categories from "./Categories";
import ShockingSale from "../ShockingSale";
import Banners from "./Banners";

const Main = () => {
  return (
    <Wrapper containerStyle={styles["main"]}>
      <img
        src={Image_MainBanner1}
        className={styles["main__banner"]}
        alt={"Free welcome gift"}
      />
      <Categories />
      <ShockingSale />
      <Banners />
    </Wrapper>
  );
};

export default Main;
