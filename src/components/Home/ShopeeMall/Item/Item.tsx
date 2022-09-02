import { AnchorHTMLAttributes } from "react";
import styles from "./item.module.css";

interface IItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  img: string;
  label: string;
}

const Item = ({ img, href, label }: IItem) => {
  return (
    <a
      href={href}
      className={styles["item"]}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <span>{label}</span>
    </a>
  );
};

export default Item;
