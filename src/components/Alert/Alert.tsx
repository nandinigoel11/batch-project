import {FC,memo} from "react";
import { IconType } from "react-icons";

interface Props{
  children: string;
  theme?: "primary"|"secondary";
  Icon?: IconType;
}

const Alert: FC<Props> = ({theme, children,Icon}) =>{
  const themeclasses= theme === "primary" ? "text-indigo-500 bg-indigo-200" : "text-gray-500 bg-gray-200"
  return (
     <div className={"flex justify-between px-4 items-center rounded-lg h-10 " + themeclasses}> 
      {children}
      {Icon && <span>
        <Icon className={themeclasses}/> </span>}
     </div>
);
};

Alert.defaultProps = {
  theme: "primary"
}

export default memo(Alert);