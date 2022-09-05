import { HTMLAttributes } from "react";
import styles from "./radio.module.css";

interface IRadio extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
}

const Radio = ({ checked, onClick }: IRadio) => {
  return (
    <div
      onClick={onClick}
      className={`${styles["radio"]} ${checked && styles["radio--checked"]}`}
    />
  );
};
export default Radio;
