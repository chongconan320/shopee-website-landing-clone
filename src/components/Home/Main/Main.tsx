import Wrapper from "components/General/Wrapper";
import styles from "./main.module.css";

import Image_MainBanner1 from "assets/images/main_banner1.jpg";
import Image_FreeShippingBanner from "assets/images/free_shipping_banner.jpeg";

const Main = () => {
  return (
    <Wrapper containerStyle={styles["main"]}>
      <img src={Image_MainBanner1} className={styles["main__banner"]} />
      <div className={styles["main__free_shipping"]}>
        <img src={Image_FreeShippingBanner} />
      </div>
    </Wrapper>
  );
};

export default Main;
