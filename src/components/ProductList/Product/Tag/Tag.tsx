import { ReactNode } from "react";
import styles from "./tag.module.css";

const TagType = {
  EconomyDelivery: {
    color: "rgb(var(--primary))",
    borderColor: "rgb(var(--primary))",
  },
  COD: {
    color: "rgb(37, 170, 153)",
    borderColor: "rgb(37, 170, 153)",
  },
  LocalSeller: {
    color: "red",
    borderColor: "red",
  },
};
interface ITag {
  children: ReactNode;
  type: keyof typeof TagType;
}

const Tag = ({ children, type }: ITag) => {
  return (
    <div className={styles["tag"]} style={TagType[type]}>
      {children}
    </div>
  );
};

export default Tag;
