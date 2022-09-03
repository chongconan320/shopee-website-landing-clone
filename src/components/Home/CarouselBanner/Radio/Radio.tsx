import styles from "./radio.module.css";

interface IRadio {
  checked: boolean;
}

const Radio = ({ checked }: IRadio) => {
  return (
    <div
      className={`${styles["radio"]} ${checked && styles["radio--checked"]}`}
    />
  );
};
export default Radio;
