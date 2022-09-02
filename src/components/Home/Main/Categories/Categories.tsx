import styles from "./categories.module.css";

import Category from "./Category";

import { useRef } from "react";
import Image_Health_and_Beauty from "assets/images/heath_and_beauty.png";

const Categories = () => {
  const categoriesListRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles["main__categories"]}>
      <span className={styles["categories__title"]}>Categories</span>
      <div
        className={styles["categories__list_wrapper"]}
        ref={categoriesListRef}
      >
        <div className={styles["categories__list"]}>
          {Array.from(Array(12).keys()).map((value, index) => {
            if (value === 23)
              return (
                <div key={index}>
                  <Category
                    key={index}
                    alt={"Health "}
                    src={Image_Health_and_Beauty}
                    label={"Health "}
                  />
                  <Category
                    key={index}
                    alt={"Health & Beauty"}
                    src={Image_Health_and_Beauty}
                    label={"Health & Beauty"}
                  />
                </div>
              );
            return (
              <div key={index}>
                <Category
                  alt={"Health & Beauty"}
                  src={Image_Health_and_Beauty}
                  label={"Health & Beauty"}
                />
                <Category
                  alt={"Health & Beauty"}
                  src={Image_Health_and_Beauty}
                  label={"Health & Beauty"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
