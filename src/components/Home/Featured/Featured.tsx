import Wrapper from "components/General/Wrapper";
import Feature from "./Feature/Feature";
import styles from "./featured.module.css";

const Featured = () => {
  const features = [
    "Shopee Supermarket",
    "Shop Malaysia",
    "Cash On Delivery",
    "10% Cashback",
    "Ringgit Store- RM1 Deals",
    "Mum's Club-5% Cashback",
    "Global Deals",
    "Men's Sale",
    "Daily Coins & Vouchers",
  ];
  return (
    <Wrapper contentStyle={styles["featured"]}>
      {features.map((feature) => (
        <Feature label={feature} />
      ))}
    </Wrapper>
  );
};

export default Featured;
