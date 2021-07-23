import { ButtonHTMLAttributes, Children, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}
const PrimaryButton: FC<Props> = ({ className, children, ...rest }) => {
    return (
        <div>
            <button
                type="submit"
                className={"items-center tracking-tight text-white bg-indigo-600 rounded-lg" + " " + className}
            >{children}</button>
        </div>
    );
};

PrimaryButton.defaultProps = {
}

export default memo(PrimaryButton);