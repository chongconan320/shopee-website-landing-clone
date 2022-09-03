import styles from "./carouselBanner.module.css";

import Image_Banner1 from "assets/images/banner1.png";
import Image_Banner2 from "assets/images/banner2.png";
import Image_Banner3 from "assets/images/banner3.png";
import Image_Banner4 from "assets/images/banner4.png";
import Image_Banner5 from "assets/images/banner5.png";

import { ReactComponent as IconDownArrow } from "assets/icons/down-arrow.svg";
import { useEffect, useState, useRef } from "react";

const banners = [
  Image_Banner1,
  Image_Banner2,
  Image_Banner3,
  Image_Banner4,
  Image_Banner5,
];

const CarouselBanner = () => {
  const [currentSelected, setCurrentSelected] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current === null) return;
    sliderRef.current.style.transform = `translateX(-${
      currentSelected * 100
    }%)`;
  }, [currentSelected]);

  const onCurrentSelectedChange = (value: number) => {
    setCurrentSelected(value);
  };

  const onPrevBannerClicked = () => {
    setCurrentSelected((prev) => {
      if (prev === 0) return banners.length - 1;
      return (prev - 1) % banners.length;
    });
  };

  const onNextBannerClicked = () => {
    setCurrentSelected((prev) => (prev + 1) % banners.length);
  };

  /**Interval for banner */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSelected((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSelected]);

  /**Mouse/Touch Sliding  */
  useEffect(() => {
    const bannerElement = bannerRef.current;
    const sliderElement = sliderRef.current;
    if (bannerElement === null) return;
    if (sliderElement === null) return;

    let isPressed: boolean = false;
    let startX: number = 0;
    let dragX: number = 0;

    const onMouseLeave = () => {
      isPressed = false;
    };
    const onMouseDown = <T extends Event>(e: T) => {
      isPressed = true;
      bannerElement.style.cursor = "grabbing";
      if (e instanceof MouseEvent) startX = e.clientX;
      if (window.TouchEvent && e instanceof TouchEvent)
        startX = e.touches[0].clientX;
    };
    const onMouseUp = () => {
      const TRIGGER = 100;
      bannerElement.style.cursor = "grab";
      if (Math.abs(dragX) > TRIGGER) {
        if (Math.sign(dragX) < 0) onNextBannerClicked();
        if (Math.sign(dragX) > 0) onPrevBannerClicked();
      }
      isPressed = false;

      startX = 0;
      dragX = 0;
    };

    const onMouseMove = <T extends Event>(e: T) => {
      if (isPressed === false) return;

      if (e instanceof MouseEvent) dragX = e.clientX - startX;
      if (window.TouchEvent && e instanceof TouchEvent)
        dragX = e.touches[0].clientX - startX;
    };
    bannerElement.addEventListener("mousedown", onMouseDown);
    bannerElement.addEventListener("mouseup", onMouseUp);
    bannerElement.addEventListener("mousemove", onMouseMove);
    bannerElement.addEventListener("mouseleave", onMouseLeave);
    bannerElement.addEventListener("touchstart", onMouseDown);
    bannerElement.addEventListener("touchend", onMouseUp);
    bannerElement.addEventListener("touchmove", onMouseMove);
    bannerElement.addEventListener("touchend", onMouseLeave);

    return () => {
      bannerElement.removeEventListener("mousedown", onMouseDown);
      bannerElement.removeEventListener("mouseup", onMouseUp);
      bannerElement.removeEventListener("mousemove", onMouseMove);
      bannerElement.removeEventListener("mouseleave", onMouseLeave);
      bannerElement.removeEventListener("touchstart", onMouseDown);
      bannerElement.removeEventListener("touchend", onMouseUp);
      bannerElement.removeEventListener("touchmove", onMouseMove);
      bannerElement.removeEventListener("touchend", onMouseLeave);
    };
  }, []);

  return (
    <div className={styles["carousel_banner"]} ref={bannerRef}>
      <div className={styles["carousel_banner__slider"]} ref={sliderRef}>
        {banners.map((banner, index) => (
          <img
            key={banner}
            src={banner}
            className={styles["slide"]}
            alt={`banner ${index}`}
            draggable={false}
          />
        ))}
      </div>
      <div className={styles["carousel_banner__radio_group"]}>
        {Array.from(Array(banners.length).keys()).map((value, index) => {
          if (index === 0)
            return (
              <input
                type={"radio"}
                name={"banner"}
                checked={currentSelected === index}
                key={index}
                onChange={() => onCurrentSelectedChange(index)}
              />
            );
          return (
            <input
              type={"radio"}
              name={"banner"}
              key={index}
              checked={currentSelected === index}
              onChange={() => onCurrentSelectedChange(index)}
            />
          );
        })}
      </div>
      <div
        onClick={onPrevBannerClicked}
        className={`${styles["carousel_banner__arrow"]} ${styles["carousel__banner__arrow-left"]}`}
      >
        <IconDownArrow
          className={`${styles["carousel_banner__arrow_icon"]} ${styles["carousel_banner__arrow_icon--left"]}`}
        />
      </div>
      <div
        onClick={onNextBannerClicked}
        className={`${styles["carousel_banner__arrow"]} ${styles["carousel_banner__arrow--right"]}`}
      >
        <IconDownArrow
          className={`${styles["carousel_banner__arrow_icon"]} ${styles["carousel_banner__arrow_icon--right"]}`}
        />
      </div>
    </div>
  );
};
export default CarouselBanner;
