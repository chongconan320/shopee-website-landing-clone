import styles from "./section.module.css";

import { ReactNode } from "react";

interface ISection {
  children: ReactNode;
  title: string;
}

const Section = ({ children, title }: ISection) => {
  return (
    <section className={styles["section"]}>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
};

export default Section;
