import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean;
    error?: string;
    Icon?: IconType;
    theme?: "primary"|"secondary";
}

const Input: FC<Props> = ({ touched, error, className,theme, placeholder,Icon, id, ...rest }) => {
    const themeclasses = theme === "primary" ? "text-indigo-600" : "text-gray-600";
    return (
        <div className="flex pb-2 space-x-3">
            {Icon && <span>
                <Icon className={" w-7 h-7 " + " " + themeclasses }/>
              </span>}
        <div className="flex flex-col ">
            {id && placeholder && (<label htmlFor={id} className="sr-only">{placeholder}</label>)}
            <input
                {...rest}
                id={id}
                placeholder={placeholder}
                className={"w-full focus:outline-none " + className} />
                <hr className="mt-3 w-96"/>
            {touched && <div className="text-red-500">{error}</div>}
            </div>
        </div>
    );
};

Input.defaultProps = {
    theme: "primary"
}

export default memo(Input);