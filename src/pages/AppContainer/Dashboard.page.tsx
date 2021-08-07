import { useEffect } from "react";
import { useState } from "react";
import {FC,memo} from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import { useAppSelector } from "../../store";

interface Props{
}

const Dashboard: FC<Props> = () =>{
  const user = useAppSelector(state => state.me);

  const [query, setQuery] = useState("");

  useEffect(() =>{
    fetchGroups({status: "all-groups", query}); 
  }, [query]);
  return (
     <div >
       <p> This is dashboard page.</p>
       <div className="h-10 mx-4 text-lg font-semibold text-black bg-gray-200 border rounded-lg ">Welcome! {user!.first_name}</div>
       <Link to="/recordings"><span className="mt-4 text-indigo-400 underline">Go to recordings section</span></Link>
     </div>
);
};

Dashboard.defaultProps = {
};

export default memo(Dashboard);