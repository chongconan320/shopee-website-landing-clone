import Wrapper from "components/General/Wrapper";
import styles from "./main.module.css";

import Image_MainBanner1 from "assets/images/main_banner1.jpg";
import Category from "./Category";
import Image_Health_and_Beauty from "assets/images/heath_and_beauty.png";
import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";
import { useEffect, useRef } from "react";

const Main = () => {
  const categoriesListRef = useRef<HTMLDivElement | null>(null);

  const onNextClicked = () => {
    if (categoriesListRef.current === null) return;
    const scrollWidth = categoriesListRef.current.scrollWidth;
    categoriesListRef.current.scrollLeft = scrollWidth;
  };
  const onPrevClicked = () => {
    if (categoriesListRef.current === null) return;
    categoriesListRef.current.scrollLeft = 0;
  };

  useEffect(() => {
    if (categoriesListRef.current === null) return;
  }, []);
  return (
    <Wrapper containerStyle={styles["main"]}>
      <img
        src={Image_MainBanner1}
        className={styles["main__banner"]}
        alt={"Free welcome gift"}
      />
      <div className={styles["main__categories"]}>
        <span className={styles["categories__title"]}>Categories</span>
        <div
          className={styles["categories__list_wrapper"]}
          ref={categoriesListRef}
        >
          <div className={styles["categories__list"]}>
            {Array.from(Array(12).keys()).map((value) => {
              if (value === 23)
                return (
                  <div>
                    <Category
                      alt={"Health "}
                      src={Image_Health_and_Beauty}
                      label={"Health "}
                    />
                    <Category
                      alt={"Health & Beauty"}
                      src={Image_Health_and_Beauty}
                      label={"Health & Beauty"}
                    />
                  </div>
                );
              return (
                <div>
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
          <div
            onClick={onPrevClicked}
            className={`${styles["categories__arrow_wrapper"]} ${styles["categories__arrow_wrapper--left"]}`}
          >
            <IconDownArrow className={styles["categories__arrow"]} />
          </div>
          <div
            onClick={onNextClicked}
            className={`${styles["categories__arrow_wrapper"]} ${styles["categories__arrow_wrapper--right"]}`}
          >
            <IconDownArrow className={styles["categories__arrow"]} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
