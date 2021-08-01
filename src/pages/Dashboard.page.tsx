import { useEffect } from "react";
import {FC,memo} from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";
interface Props{
}
const Dashboard: FC<Props> = (Props) =>{
  useEffect(() =>{
    fetchGroups({status: "all-groups"});
  }, []);
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