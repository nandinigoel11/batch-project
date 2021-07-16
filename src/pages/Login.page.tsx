import {FC,memo} from "react";
import { Link } from "react-router-dom";
interface Props{
}
const Login: React.FC<Props> = (Props) =>{
  return (
     <div>
       This is login page. <br />
       Don't have an account? <Link to="/signup"><span className="text-indigo-400 underline"> Click here </span></Link> <br />
       <Link to="/dashboard"><span className="text-indigo-400 underline">Go to dashboard.</span></Link>
     </div>
  );
};

Login.defaultProps = {
};

export default memo(Login);

