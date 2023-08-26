import React from "react";
import { VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    theme?: "filled" | "outlined" | "ghost" | "text" | null | undefined;
    size?: "large" | "medium" | "small" | "xsmall" | null | undefined;
    round?: "sm" | "lg" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    loading?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
