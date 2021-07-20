import {FC,memo} from "react";
interface Props{
}
const AuthSection: FC<Props> = (Props) =>{
  return (
     <div className="w-1/2 h-screen text-white bg-black">
       Logo will be presented here.
     </div>
);
};

AuthSection.defaultProps = {
}

export default memo(AuthSection);