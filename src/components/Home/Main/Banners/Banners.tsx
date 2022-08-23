import Image_MainBanners from "assets/images/banners.png";

import styles from "./banners.module.css";

const Banners = () => {
  return (
    <div className={styles["banners"]}>
      <div className={styles["banners__links"]}>
        <a className={styles["banner__link"]} href={"/"} />
        <a className={styles["banner__link"]} href={"/b"} />
        <a className={styles["banner__link"]} href={"/c"} />
      </div>
      <img
        src={Image_MainBanners}
        className={styles["banners__images"]}
        alt={"Banners"}
      />
    </div>
  );
};
export default Banners;
