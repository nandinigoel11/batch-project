import { useEffect } from "react";
import { useState } from "react";
import {FC,memo} from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";

interface Props{
}

const Dashboard: FC<Props> = (Props) =>{
  const [query, setQuery] = useState("");

  useEffect(() =>{
    fetchGroups({status: "all-groups", query});
  }, [query]);
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