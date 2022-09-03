import { useState } from "react";
import styles from "./productList.module.css";
import Image_Event from "assets/images/event.png";
import Product from "./Product";

enum HeaderOptions {
  DailyDiscover,
  Event,
}
const ProductList = () => {
  const [option, setOption] = useState<HeaderOptions>(
    HeaderOptions.DailyDiscover
  );
  const onHeaderOptionClicked = (option: HeaderOptions) => {
    setOption(option);
  };
  return (
    <div className={styles["product_list"]}>
      <div className={styles["product_list__header"]}>
        <div
          onClick={() => onHeaderOptionClicked(HeaderOptions.DailyDiscover)}
          className={`${styles["header__option"]} ${
            option === HeaderOptions.DailyDiscover &&
            styles["header__option--selected"]
          }`}
        >
          Daily Discover
        </div>
        <div
          onClick={() => onHeaderOptionClicked(HeaderOptions.Event)}
          className={`${styles["header__option"]} ${
            option === HeaderOptions.Event && styles["header__option--selected"]
          }`}
        >
          <img
            src={Image_Event}
            className={styles["header__image"]}
            alt={"Event"}
          />
        </div>
      </div>
      <div className={styles["product_list__products"]}>
        {Array.from(Array(20).keys()).map((value) => (
          <Product key={value} />
        ))}
      </div>
      <div className={styles["product_list__see_more"]}>See more</div>
    </div>
  );
};
export default ProductList;
