import Discount from "components/General/Discount";
import styles from "./product.module.css";
import Product_Adidas from "assets/images/product.png";
import Tag from "./Tag";
const Product = () => {
  const info =
    "Seluar Lelaki Slim Fit  Tracksuit Men Casual Pants Men Long Pants Men Trousers Chinos Pants Men Seluar Track Lelaki";
  return (
    <div className={styles["product"]}>
      <div className={styles["product__product"]}>
        <div className={styles["product__image_section"]}>
          <img
            src={Product_Adidas}
            className={styles["product__image"]}
            alt={info}
          />
          <Discount discount={24} width={35} height={32} fontSize={0.9} />
        </div>
        <div className={styles["product__info"]}>
          <div className={styles["info__name"]}>{info}</div>
          <div className={styles["info__tags"]}>
            <Tag type={"EconomyDelivery"}>
              <span>EconomyDelivery</span>
            </Tag>{" "}
            <Tag type={"COD"}>
              <span>COD</span>
            </Tag>{" "}
            <Tag type={"LocalSeller"}>
              <span>Local Seller</span>
            </Tag>{" "}
          </div>
          <div className={styles["info__price_sold"]}>
            <span>RM3.60</span>
            <span>4.9k sold</span>
          </div>
        </div>
      </div>
      <div className={styles["product__find_similar"]}>Find Similar</div>
    </div>
  );
};
export default Product;
