import { ButtonHTMLAttributes, DetailedHTMLProps, FC, SVGProps } from "react";

export type ButtonAppearance =
  | "primary"
  | "outline"
  | "ghost"
  | "accentGhost"
  | "facebook";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: ButtonAppearance;
  caption?: string;
  isLoading?: boolean;
  leftIcon?: FC<SVGProps<SVGSVGElement>>;
  rightIcon?: FC<SVGProps<SVGSVGElement>>;
  loader?: () => JSX.Element;
}
