import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean;
    error?: string;
    Icon?: IconType;
}

const Input: FC<Props> = ({ touched, error, className, placeholder,Icon, id, ...rest }) => {
    return (
        <div className="flex pb-2 space-x-3">
            {Icon && <span>
                <Icon className="text-indigo-600 w-7 h-7"/>
              </span>}
        <div className="flex flex-col ">
            {id && placeholder && (<label htmlFor={id} className="sr-only">{placeholder}</label>)}
            <input
                {...rest}
                id={id}
                placeholder={placeholder}
                className={"w-full focus:outline-none focus:border-opacity-0" + className} />
                <hr className="mt-3 w-96"/>
            {touched && <div className="text-red-500">{error}</div>}
            </div>
        </div>
    );
};

Input.defaultProps = {
}

export default memo(Input);