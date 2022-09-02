import Countdown from "./Countdown";
import styles from "./shockingSale.module.css";

import Image_ShockingSale from "assets/images/shocking_sale.png";
import Image_ShockingSaleItem from "assets/images/shocking_sale_item.png";

import { ReactComponent as IconArrow } from "assets/icons/down-arrow.svg";

import Item from "./Item";
import { useRef } from "react";

const ITEMS_RENDER_AMOUNT = 20;

const ShockingSale = () => {
  const shockingSalesRef = useRef<HTMLDivElement>(null);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);

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
        </div>
        <div className={styles["header__browser_all"]}>
          <span>See All</span>
          <IconArrow className={styles["shocking_sale__icon--right_arrow"]} />
        </div>
      </div>
      <div className={styles["shocking_sale__items"]} ref={shockingSalesRef}>
        <div
          className={styles["shocking_sale__items_wrapper"]}
          ref={itemsWrapperRef}
        >
          {Array.from(Array(ITEMS_RENDER_AMOUNT).keys()).map((value, index) => {
            return (
              <Item
                key={index}
                productImg={Image_ShockingSaleItem}
                discount={42}
                sold={index}
                total={250}
                href={"/"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShockingSale;
