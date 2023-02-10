import UPassItemSrc from "../../assets/images/U-pass-item.png";
const UPassItemImg = ({ className, style }) => {
  return (
    <img
      src={UPassItemSrc}
      alt="UPassItemImg"
      style={{ ...style, objectFit: "cover" }}
      className={className}
    />
  );
};
export default UPassItemImg;
