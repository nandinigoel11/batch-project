import {FC,memo} from "react";
interface Props{
}
const AuthSection: FC<Props> = (Props) =>{
  return (
     <div className="w-1/2 h-screen text-white bg-black">
       <div className="flex items-center justify-center h-screen">
       <img className="h-96 w-96" src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png" alt="logo will be presented here" /></div>
     </div>
);
};

AuthSection.defaultProps = {
}

export default memo(AuthSection);