import styles from "./item.module.css";
import Image_ShockingSaleLabel from "assets/images/shocking_sale_label.png";
import { AnchorHTMLAttributes, forwardRef } from "react";

interface IItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  productImg: string;
  sold: number;
  total: number;
  discount: number;
  width: number;
}

const Item = forwardRef<HTMLAnchorElement, IItem>(
  ({ productImg, sold, total, discount, width, href }: IItem, ref) => {
    return (
      <a className={styles["item"]} href={href} ref={ref}>
        <div
          className={styles["item__product"]}
          style={{ width: `${width}px` }}
        >
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
          <div className={styles["product__discount"]}>
            <span>{discount}%</span>
            <span>OFF</span>
          </div>
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
  }
);

export default Item;
