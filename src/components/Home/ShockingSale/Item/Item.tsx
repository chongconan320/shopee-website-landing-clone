import styles from "./item.module.css";
import Image_ShockingSaleLabel from "assets/images/shocking_sale_label.png";
import { AnchorHTMLAttributes } from "react";
import Discount from "components/General/Discount";

interface IItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  productImg: string;
  sold: number;
  total: number;
  discount: number;
}

const Item = ({ productImg, sold, total, discount, href }: IItem) => {
  return (
    <a className={styles["item"]} href={href}>
      <div className={styles["item__product"]}>
        <img
          src={productImg}
          alt={"item"}
          className={styles["product__image--product"]}
        />
        <img
          src={Image_ShockingSaleLabel}
          alt={"label"}
          className={styles["product__image--label"]}
        />
        <Discount discount={discount} width={40} height={45} />
      </div>
      <div className={styles["item__price"]}>
        <span>RM</span>
        <span>11.96</span>
      </div>
      <div className={styles["item__progress_bar"]}>
        <span>{sold} Sold</span>
        <div
          className={styles["progress_bar__step"]}
          style={{ width: `${(sold / total) * 100}%` }}
        />
      </div>
    </a>
  );
};

export default Item;
