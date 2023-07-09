import React, {ReactNode} from  "react";
import "./Button.scss";

interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick} >{children}</button>
    )
}
