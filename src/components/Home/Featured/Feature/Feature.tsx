import styles from "./feature.module.css";

interface IFeature {
  icon?: string;
  label: string;
}

const Feature = ({ icon, label }: IFeature) => {
  return (
    <div className={styles["feature"]}>
      <div className={styles["feature__icon"]}></div>
      <span>{label}</span>
    </div>
  );
};
export default Feature;
