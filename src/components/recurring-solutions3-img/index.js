import RecuuringSolutionsSrc from "../../assets/images/recuuring-solutions-img3.png";

const RecuuringSolutionsImg3 = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={RecuuringSolutionsSrc}
    alt={"RecuuringSolutionsImg3"}
    />
  );
};

export default RecuuringSolutionsImg3;
