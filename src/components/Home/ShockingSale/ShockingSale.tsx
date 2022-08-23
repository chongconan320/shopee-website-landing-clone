import Countdown from "./Countdown";
import styles from "./shockingSale.module.css";

import Image_ShockingSale from "assets/images/shocking_sale.png";
import Image_ShockingSaleItem from "assets/images/shocking_sale_item.png";

import { ReactComponent as IconArrow } from "assets/icons/down-arrow.svg";

import Item from "./Item";
import { useEffect, useRef, useState } from "react";

const ITEMS_RENDER_AMOUNT = 20;
const AMOUNT_TO_SHOW = 5;
const GAP = 35;
const PADDING = 21;

const ShockingSale = () => {
  const shockingSalesRef = useRef<HTMLDivElement>(null);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLAnchorElement>(null);
  const [sequence, setSequence] = useState<{ [key: string]: number }>({
    currentSelected: 1,
    1: 0,
  });
  const [itemWidth, setItemWidth] = useState(0);
  const onPreviousSequence = () => {
    const itemsWrapperElement = itemsWrapperRef.current;
    if (itemsWrapperElement === null) return;
    if (sequence.currentSelected === 0) return;
    const scrollToLeft: number = sequence[sequence.currentSelected - 1];
    setSequence((prev) => ({
      ...prev,
      currentSelected: prev.currentSelected - 1,
    }));
    itemsWrapperElement.scroll({
      left: scrollToLeft,
    });
  };
  const onNextSequence = () => {
    if (sequence.currentSelected * AMOUNT_TO_SHOW === ITEMS_RENDER_AMOUNT)
      return;

    const itemsWrapperElement = itemsWrapperRef.current;
    if (itemsWrapperElement === null) return;

    const scrollToLeft =
      Math.ceil(itemWidth * AMOUNT_TO_SHOW + GAP * AMOUNT_TO_SHOW) *
      sequence["currentSelected"];
    itemsWrapperElement.scroll({
      left: scrollToLeft,
    });
    setSequence((prev) => {
      return {
        ...prev,
        currentSelected: prev.currentSelected + 1,
        [prev.currentSelected + 1]: scrollToLeft,
      };
    });
  };
  useEffect(() => {
    const shockingSalesElement = shockingSalesRef.current;
    const itemsWrapperElement = itemsWrapperRef.current;
    const itemElement = itemRef.current;
    if (
      itemsWrapperElement === null ||
      itemElement === null ||
      shockingSalesElement === null
    )
      return;
    setItemWidth(
      Math.ceil(
        (shockingSalesElement.clientWidth - PADDING - GAP * AMOUNT_TO_SHOW) /
          AMOUNT_TO_SHOW
      )
    );
  }, []);

  return (
    <div className={styles["shocking_sale"]}>
      <div className={styles["shocking_sale__header"]}>
        <div>
          <img
            src={Image_ShockingSale}
            alt={"Shocking Sale"}
            className={styles["shocking_sale__title"]}
          />
          {/* <Countdown/> */}
        </div>
        <div className={styles["header__browser_all"]}>
          <span>See All</span>
          <IconArrow className={styles["shocking_sale__icon--right_arrow"]} />
        </div>
      </div>
      <div className={styles["shocking_sale__items"]} ref={shockingSalesRef}>
        {sequence.currentSelected !== 1 && (
          <div
            onClick={onPreviousSequence}
            className={`${styles["shocking_sale__arrows"]} ${styles["shocking_sale__arrows--left"]}`}
          >
            <IconArrow
              className={`${styles["shocking_sale__items_arrow"]} ${styles["shocking_sale__items_arrow--left"]}`}
            />
          </div>
        )}
        {sequence.currentSelected * AMOUNT_TO_SHOW !== ITEMS_RENDER_AMOUNT && (
          <div
            onClick={onNextSequence}
            className={`${styles["shocking_sale__arrows"]} ${styles["shocking_sale__arrows--right"]}`}
          >
            <IconArrow
              className={`${styles["shocking_sale__items_arrow"]} ${styles["shocking_sale__items_arrow--right"]} `}
            />
          </div>
        )}

        <div
          className={styles["shocking_sale__items_wrapper"]}
          ref={itemsWrapperRef}
        >
          {Array.from(Array(ITEMS_RENDER_AMOUNT).keys()).map((value, index) => {
            return (
              <Item
                ref={itemRef}
                key={index}
                productImg={Image_ShockingSaleItem}
                discount={42}
                sold={index}
                total={250}
                href={"/"}
                width={itemWidth}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShockingSale;
