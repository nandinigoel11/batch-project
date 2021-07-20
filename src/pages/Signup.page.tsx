import { FC, memo } from "react";
import { Link } from "react-router-dom";
import AuthSection from "../components/AuthSection";
interface Props {
}
const Signup: FC<Props> = (Props) => {
  return (
    <div>
      This is signup page. <br />
      Already have an account. <Link to="/login"><span className="text-indigo-400 underline"> Click here</span> </Link>
    </div>

  );
};

Signup.defaultProps = {
};

export default memo(Signup);