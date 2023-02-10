import uPassBannerSrc from "../../assets/images/U-pass.png";
const UPassBannerBackgroundImg = ({ className, style }) => {
  return (
    <img
      src={uPassBannerSrc}
      alt="UPassBannerBackgroundImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default UPassBannerBackgroundImg;
