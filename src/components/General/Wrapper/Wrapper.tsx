import { ReactNode } from "react";
import styles from "./wrapper.module.css";

interface IWrapper {
  children: ReactNode;
  containerStyle?: string;
  contentStyle?: string;
}

const Wrapper = ({ children, containerStyle, contentStyle }: IWrapper) => {
  return (
    <div className={`${styles["wrapper"]} ${containerStyle}`}>
      <div className={`${styles["wrapper__content"]} ${contentStyle}`}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
