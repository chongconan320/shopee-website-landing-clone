import styles from "./discount.module.css";
interface IDiscount {
  discount: number;
  width?: number;
  height?: number;
  fontSize?: number;
}

const Discount = ({ discount, width, height, fontSize }: IDiscount) => {
  const _width: string = width === undefined ? "auto" : `${width}px`;
  const _height: string = width === undefined ? "auto" : `${height}px`;
  const _fontSize: string =
    fontSize === undefined ? "1.2rem" : `${fontSize}rem`;

  return (
    <div
      className={styles["product__discount"]}
      style={{ width: _width, height: _height, fontSize: _fontSize }}
    >
      <span>{discount}%</span>
      <span>OFF</span>
    </div>
  );
};

export default Discount;
