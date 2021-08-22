import { FC } from "react";
import { ILogoProps } from "./Logo.props";
import { Heading } from "./style";
import { ReactComponent as SVG } from "./svg/Instagram.svg";

export const Logo: FC<ILogoProps> = (props): JSX.Element => {
  return (
    <>
      <Heading>Instagram</Heading>
      <SVG {...props} />
    </>
  );
};
