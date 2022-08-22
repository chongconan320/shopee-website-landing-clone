import styles from "./item.module.css";
import Image_ShockingSaleLabel from "assets/images/shocking_sale_label.png";

interface IItem {
  productImg: string;
  sold: number;
  total: number;
  discount: number;
}

const Item = ({ productImg, sold, total, discount }: IItem) => {
  return (
    <div className={styles["item"]}>
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
    </div>
  );
};
export default Item;
