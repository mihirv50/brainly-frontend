import { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-[#4744D8] text-white",
  secondary: "bg-[#DEE5FC] text-[#C8CCFF]",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-4 px-6 text-lg",
};

const defaultStyle = "rounded-md flex items-center justify-center gap-1";
const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyle} ${
        sizeStyles[props.size]
      } `}
    >
      {props.startIcon} {props.text}
    </button>
  );
};

export default Button;
