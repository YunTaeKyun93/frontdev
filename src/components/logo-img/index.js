import logoSrc from "../../assets/images/logo.png";

const logoImg = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={logoSrc}
    alt={"AboutContentsImage2"}
    />
  );
};

export default logoImg;
