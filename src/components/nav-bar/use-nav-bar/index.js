import { useNavigate } from "react-router-dom";

const useNavBar = () => {
  const navigator = useNavigate();
  return {
    navigator
  };
};
export default useNavBar;
