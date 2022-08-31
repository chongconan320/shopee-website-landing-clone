import Wrapper from "components/General/Wrapper";
import CarouselBanner from "../CarouselBanner";
import styles from "./banner.module.css";
import Image_Banner6 from "assets/images/banner6.png";
import Image_Banner7 from "assets/images/banner7.png";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement === null) return;

    setImageHeight(
      carouselElement.children[0].children[0].clientHeight / 2 - 5
    );

    const getCarouselSize = () => {
      setImageHeight(
        carouselElement.children[0].children[0].clientHeight / 2 - 5
      );
    };
    window.addEventListener("resize", getCarouselSize);
    return () => {
      window.removeEventListener("resize", getCarouselSize);
    };
  }, []);
  return (
    <>
      <Wrapper contentStyle={styles["banner"]}>
        <div className={styles["banner__carousel_banner"]} ref={carouselRef}>
          <CarouselBanner />
        </div>
        <a href="/" className={styles["banner__normal_banner"]}>
          <img
            src={Image_Banner6}
            style={{ height: `${imageHeight}px` }}
            alt={"Banner6"}
          />
        </a>
        <a href="/" className={styles["banner__normal_banner"]}>
          <img
            src={Image_Banner7}
            style={{ height: `${imageHeight}px` }}
            alt={"Banner 7"}
          />
        </a>
      </Wrapper>
    </>
  );
};

export default Banner;
