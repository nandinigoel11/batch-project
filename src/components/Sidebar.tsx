import {FC,memo} from "react";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import {logout} from "../api/auth";


interface Props{
  
}
const Sidebar: FC<Props> = () =>{

  return (
     <div className="h-100% bg-gray-500 w-60">
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