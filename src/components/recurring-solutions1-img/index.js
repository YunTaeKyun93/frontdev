import RecuuringSolutionsSrc from "../../assets/images/recuuring-solutions-img1.png";

const RecuuringSolutionsImg1 = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={RecuuringSolutionsSrc}
    alt={"RecuuringSolutionsImg1"}
    />
  );
};

export default RecuuringSolutionsImg1;
