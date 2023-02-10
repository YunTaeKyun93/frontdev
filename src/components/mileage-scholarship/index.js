import MileageScholarshipSrc from "../../assets/images/mileage-banner.png";

const MileageScholarshipImage = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={MileageScholarshipSrc}
    alt={"MileageScholarship"}
    />
  );
};

export default MileageScholarshipImage;
