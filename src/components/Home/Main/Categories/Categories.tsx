import styles from "./categories.module.css";

import Category from "./Category";

import { useRef, useState } from "react";
import Image_Health_and_Beauty from "assets/images/heath_and_beauty.png";
import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";

const Categories = () => {
  const categoriesListRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const onNextClicked = () => {
    if (categoriesListRef.current === null) return;
    const scrollWidth = categoriesListRef.current.scrollWidth;
    categoriesListRef.current.scrollLeft = scrollWidth;
    setIsScrolled(true);
  };
  const onPrevClicked = () => {
    if (categoriesListRef.current === null) return;
    categoriesListRef.current.scrollLeft = 0;
    setIsScrolled(false);
  };
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
      <div className={styles["categories__arrows"]}>
        {isScrolled && (
          <div
            onClick={onPrevClicked}
            className={`${styles["categories__arrow_wrapper"]} ${styles["categories__arrow_wrapper--left"]}`}
          >
            <IconDownArrow className={styles["categories__arrow"]} />
          </div>
        )}
        {!isScrolled && (
          <div
            onClick={onNextClicked}
            className={`${styles["categories__arrow_wrapper"]} ${styles["categories__arrow_wrapper--right"]}`}
          >
            <IconDownArrow className={styles["categories__arrow"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
