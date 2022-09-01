import styles from "./feature.module.css";
import Image_Feature from "assets/images/feature.png";

interface IFeature {
  icon?: string;
  label: string;
}

const Feature = ({ icon, label }: IFeature) => {
  return (
    <div className={styles["feature"]}>
      <img
        src={Image_Feature}
        alt={label}
        className={styles["feature__icon"]}
      />
      <span>{label}</span>
    </div>
  );
};
export default Feature;
