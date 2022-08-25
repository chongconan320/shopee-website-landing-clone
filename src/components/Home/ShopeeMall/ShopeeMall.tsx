import styles from "./shopeeMall.module.css";

import Image_GuarenteeAuthentic from "assets/images/guarentee_authentic.png";
import Image_Return from "assets/images/return.png";
import Image_FreeShipping from "assets/images/free_shipping.png";
import Image_Bosh from "assets/images/bosch.png";
import Image_PhilipsProduct from "assets/images/philips_product.png";
import Image_BoschProduct from "assets/images/bosch_product.png";
import { ReactComponent as IconArrow } from "assets/icons/down-arrow.svg";

import Item from "./Item";
import { useEffect, useRef, useState } from "react";

const ShopeeMall = () => {
  const itemsListRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [isNextClicked, setIsNextClicked] = useState<boolean>(false);
  const onNextClicked = () => {
    const itemsWrapperEl = itemsWrapperRef.current;
    if (itemsWrapperEl === null) return;
    setIsNextClicked(true);
    itemsWrapperEl.scrollLeft = itemsWrapperEl.scrollWidth;
  };
  const onPreviousClicked = () => {
    const itemsWrapperEl = itemsWrapperRef.current;
    if (itemsWrapperEl === null) return;

    setIsNextClicked(false);
    itemsWrapperEl.scrollLeft = 0;
  };
  useEffect(() => {
    const itemsListEl = itemsListRef.current;
    const itemsEl = itemsRef.current;
    if (itemsListEl === null || itemsEl === null) return;

    const width = Math.floor(itemsListEl.clientWidth / 4);
    setItemWidth(width);
  }, []);

  return (
    <div className={styles["shopeeMall"]}>
      <div
        className={`${styles["shopeeMall__header"]} ${styles["shopeeMall__padding--horizontal"]}`}
      >
        <span className={styles["shopeeMall__title"]}>SHOPEE MALL</span>
        <span className={styles["shopeeMall__advertising"]}>
          <img
            src={Image_GuarenteeAuthentic}
            className={styles["shopeeMall__advertising_icon"]}
            alt={"Guarentee Authentic "}
          />
          100% Authentic
        </span>
        <span className={styles["shopeeMall__advertising"]}>
          <img
            src={Image_Return}
            className={styles["shopeeMall__advertising_icon"]}
            alt={"Guarentee Authentic "}
          />
          15 Days Return*
        </span>
        <span className={styles["shopeeMall__advertising"]}>
          <img
            src={Image_FreeShipping}
            className={styles["shopeeMall__advertising_icon"]}
            alt={"Guarentee Authentic "}
          />
          Free Shipping
        </span>
      </div>
      <div className={styles["shopeeMall__items"]}>
        <img
          src={Image_Bosh}
          className={styles["shopeeMall__images--bosch"]}
          alt={"Bosch"}
        />
        <div className={styles["shopeeMall__promotions"]} ref={itemsListRef}>
          {isNextClicked === true && (
            <div
              onClick={onPreviousClicked}
              className={`${styles["shopeeMall__arrows"]} ${styles["shopeeMall__arrows--left"]}`}
            >
              <IconArrow
                className={`${styles["shopeeMall__items_arrow"]} ${styles["shopeeMall__items_arrow--left"]}`}
              />
            </div>
          )}
          {isNextClicked !== true && (
            <div
              onClick={onNextClicked}
              className={`${styles["shopeeMall__arrows"]} ${styles["shopeeMall__arrows--right"]}`}
            >
              <IconArrow
                className={`${styles["shopeeMall__items_arrow"]} ${styles["shopeeMall__items_arrow--right"]} `}
              />
            </div>
          )}

          <div
            className={styles["shopeeMall__items__list_wrapper"]}
            ref={itemsWrapperRef}
          >
            <div className={styles["shopeeMall__items__list"]}>
              {Array.from(Array(8).keys()).map((value, index) => (
                <div
                  key={index}
                  style={{ height: "100%", width: `${itemWidth}px` }}
                  ref={itemsRef}
                >
                  <Item
                    img={Image_PhilipsProduct}
                    href={"/"}
                    label={"Up to 55% Off"}
                  />
                  {index === 7 ? (
                    <a href={"/"} className={styles["shopeeMall_see_all"]}>
                      <span>See All </span>{" "}
                      <span
                        className={styles["shopeeMall__see_all_arrow_wrapper"]}
                      >
                        <IconArrow
                          className={styles["shopeeMall__see_all_arrow"]}
                        />
                      </span>
                    </a>
                  ) : (
                    <Item
                      img={Image_BoschProduct}
                      href={"/"}
                      label={"RM18 Off Voucher"}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopeeMall;
