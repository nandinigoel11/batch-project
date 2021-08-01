import {FC,memo} from "react";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import {logout} from "../api";
import { useHistory } from "react-router-dom";

interface Props{
}
const Sidebar: FC<Props> = (Props) =>{

  return (
     <div className="h-screen bg-gray-500 w-60">
       <p className="pb-4"> This is sidebar.</p>
       <PrimaryButton onClick={() => {
         logout();
         window.location.href ="/login";
       }}>logout</PrimaryButton>
     </div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);