import Wrapper from "components/General/Wrapper";
import styles from "./main.module.css";

import Image_MainBanner1 from "assets/images/main_banner1.jpg";
import Categories from "./Categories";

const Main = () => {
  return (
    <Wrapper containerStyle={styles["main"]}>
      <img
        src={Image_MainBanner1}
        className={styles["main__banner"]}
        alt={"Free welcome gift"}
      />
      <Categories />
    </Wrapper>
  );
};

export default Main;
