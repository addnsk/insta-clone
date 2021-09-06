import { FC } from "react";
import { Spiner } from "./style";

export interface IRoundLoaderProps {
  color?: "light" | "dark" | "primary";
}

export const RoundLoader: FC<IRoundLoaderProps> = ({
  color = "light",
}): JSX.Element => {
  return (
    <Spiner color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spiner>
  );
};
