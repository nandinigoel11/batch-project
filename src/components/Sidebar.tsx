import {FC,memo} from "react";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import {logout} from "../api/auth";
import { Link } from "react-router-dom";


interface Props{
  
}
const Sidebar: FC<Props> = () =>{

  return (
    <div className="h-auto bg-gray-500">
     <div className="h-screen bg-gray-500 w-60">
       <p className="pb-4"> This is sidebar.</p>
       <PrimaryButton onClick={() => {
         logout();
         window.location.href ="/login";
       }}>logout</PrimaryButton>
     </div></div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);