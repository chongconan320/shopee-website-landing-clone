import styles from "./shopeeMall.module.css";

import Image_GuarenteeAuthentic from "assets/images/guarentee_authentic.png";
import Image_Return from "assets/images/return.png";
import Image_FreeShipping from "assets/images/free_shipping.png";
import Image_Bosh from "assets/images/bosch.png";
import Image_PhilipsProduct from "assets/images/philips_product.png";
import Image_BoschProduct from "assets/images/bosch_product.png";
import { ReactComponent as IconArrow } from "assets/icons/down-arrow.svg";

import Item from "./Item";

const ShopeeMall = () => {
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
        <div className={styles["shopeeMall__items__list"]}>
          {Array.from(Array(8).keys()).map((value, index) => (
            <div key={index}>
              <Item
                img={Image_PhilipsProduct}
                href={"/"}
                label={"Up to 55% Off"}
              />
              {index === 7 ? (
                <a href={"/"} className={styles["shopeeMall_see_all"]}>
                  <span>See All </span>{" "}
                  <span className={styles["shopeeMall__see_all_arrow_wrapper"]}>
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
  );
};

export default ShopeeMall;
