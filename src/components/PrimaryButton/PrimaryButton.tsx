import classNames from "classnames";
import { ButtonHTMLAttributes, Children, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    theme?: "primary"|"secondary"
}
const PrimaryButton: FC<Props> = ({ className,theme, children, ...rest }) => {
    const themeclasses = theme === "primary" ? "bg-indigo-600" : "bg-gray-600";

    return (
        <div>
            <button
                {...rest}
                className={classNames("items-center tracking-tight text-white w-20 h-10 rounded-lg", themeclasses, className)
                 }
            >{children}</button>
        </div>
    );
};

PrimaryButton.defaultProps = {
    theme: "primary"
}

export default memo(PrimaryButton);