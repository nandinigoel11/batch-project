import {FC,memo} from "react";
import { Link } from "react-router-dom";
interface Props{
}
const Dashboard: FC<Props> = (Props) =>{
  return (
     <div>
       This is dashboard page.
       <Link to="/recordings"><span className="text-indigo-400 underline">Go to recordings section</span></Link>
     </div>
);
};

Dashboard.defaultProps = {
};

export default memo(Dashboard);