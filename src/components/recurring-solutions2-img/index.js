import RecuuringSolutionsSrc from "../../assets/images/recuuring-solutions-img2.png";

const RecuuringSolutionsImg2 = ({ className, style }) => {
  return (
    <img
    className={className}
    style={{ ...style, objectFit: "cover" }}
    src={RecuuringSolutionsSrc}
    alt={"RecuuringSolutionsImg2"}
    />
  );
};

export default RecuuringSolutionsImg2;
