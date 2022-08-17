import styles from "./category.module.css";

interface ICategory {
  src: string;
  alt: string;
  label: string;
}

const Category = ({ src, alt, label }: ICategory) => {
  return (
    <div className={styles["category"]}>
      <img src={src} className={styles["category__image"]} alt={alt} />
      <span className={styles["category__label"]}>{label}</span>
    </div>
  );
};
export default Category;
