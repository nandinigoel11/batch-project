import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean;
    error?: string;
}

const Input: FC<Props> = ({ touched, error, className, placeholder, id, ...rest }) => {
    return (
        <>
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
        </>
    );
};

Input.defaultProps = {
}

export default memo(Input);