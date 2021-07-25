import {FC,memo,ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    theme?: "primary"|"secondary";
}
const OutlineButton: FC<Props> = ({className,theme,children,...rest}) =>{
    const themeclasses = theme === "primary" ? "text-indigo-600 border-indigo-600 border hover:bg-indigo-600 hover:text-white" : "text-gray-600 border-gray-600 border hover:bg-gray-600 hover:text-white";
  return (
     <div>
       <button
       {...rest}
                className={"items-center tracking-tight w-20 h-10 rounded-lg "+ themeclasses + " " + className}
            >{children}
       </button>
     </div>
);
};

OutlineButton.defaultProps = {
    theme: "primary"
}

export default memo(OutlineButton);