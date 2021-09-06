import { FC } from "react";
import { Link } from "./style";

export const OutsideLink: FC = (props): JSX.Element => {
  const { children } = props;
  return <Link>{children}</Link>;
};
