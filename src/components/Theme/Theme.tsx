import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Body, Fonts } from "./style";
import { sheet } from "./_sheet";

export const Theme: FC = (props): JSX.Element => {
  const { children } = props;
  return (
    <ThemeProvider theme={sheet}>
      <Fonts />
      <Body />
      {children}
    </ThemeProvider>
  );
};
