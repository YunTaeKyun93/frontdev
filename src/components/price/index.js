import PriceSrc from "../../assets/images/price.png";

const PriceImg = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={PriceSrc}
    alt={"PriceImg"}
    />
  );
};

export default PriceImg;
