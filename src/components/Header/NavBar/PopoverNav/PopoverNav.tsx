import { Fragment, ReactNode } from "react";
import styles from "./popoverNav.module.css";

interface IPopoverNav {
  spanElement?: ReactNode;
  popoverElement?: ReactNode;
}

const PopoverNav = ({ spanElement, popoverElement }: IPopoverNav) => {
  return (
    <>
      <span className={styles["nav"]}>
        {spanElement}{" "}
        <div className={styles["nav_bar__popover"]}> {popoverElement}</div>
      </span>
    </>
  );
};

export default PopoverNav;
