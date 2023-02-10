import uPassBannerSrc from "../../assets/images/u-pass-banner.png";
const UPassBannerImg = ({ className, style }) => {
  return (
    <img
      src={uPassBannerSrc}
      alt="uPassBannerImg"
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};
export default UPassBannerImg;
