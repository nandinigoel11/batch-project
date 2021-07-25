import {FC,memo} from "react";

interface Props{
    theme?: "primary"|"secondary",
}

const ProgressBar: FC<Props> = ({theme}) =>{
    const themeclasses = theme === "primary" ? "bg-indigo-600" : "bg-gray-600";
  return (
     <div className={"w-full h-6 rounded-full bg-gray-200 "}>
       <div className={"w-1/2 h-6 rounded-full " + themeclasses}></div>
     </div>
);
};

ProgressBar.defaultProps = {
    theme: "primary",
}

export default memo(ProgressBar);