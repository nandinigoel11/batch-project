import {FC,memo} from "react";
interface Props{
}
const Sidebar: FC<Props> = (Props) =>{
  return (
     <div className="h-screen bg-gray-500 w-60">
       This is sidebar.
     </div>
);
};

Sidebar.defaultProps = {
}

export default memo(Sidebar);