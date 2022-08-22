import Countdown from "./Countdown";
import styles from "./shockingSale.module.css";

import Image_ShockingSale from "assets/images/shocking_sale.png";
import Image_ShockingSaleItem from "assets/images/shocking_sale_item.png";

import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";
import Item from "./Item";

const ShockingSale = () => {
  return (
    <div className={styles["shocking_sale"]}>
      <div className={styles["shocking_sale__header"]}>
        <div>
          <img
            src={Image_ShockingSale}
            alt={"Shocking Sale"}
            className={styles["shocking_sale__title"]}
          />
          {/* <Countdown/> */}
        </div>{" "}
        <div className={styles["header__browser_all"]}>
          <span>See All</span>
          <IconDownArrow
            className={styles["shocking_sale__icon--right_arrow"]}
          />
        </div>
      </div>
      <div className={styles["shocking_sale__items"]}>
        <Item
          productImg={Image_ShockingSaleItem}
          discount={42}
          sold={27}
          total={250}
        />
      </div>
    </div>
  );
};

export default ShockingSale;
