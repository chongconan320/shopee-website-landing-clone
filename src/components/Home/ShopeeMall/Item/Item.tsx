import { AnchorHTMLAttributes, forwardRef } from "react";
import styles from "./item.module.css";

interface IItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  img: string;
  label: string;
}

const Item = forwardRef<HTMLAnchorElement, IItem>(
  ({ img, href, label }: IItem, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={styles["item"]}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <span>{label}</span>
      </a>
    );
  }
);
export default Item;
