import { FC } from "react";
import { IButtonProps } from "./Button.props";
import { ButtonStyle } from "./style";

export const Button: FC<IButtonProps> = (props): JSX.Element => {
  const {
    appearance = "primary",
    type = "button",
    disabled,
    caption,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    isLoading = false,
    loader: Loader,
  } = props;

  const pickedLoader = Loader ? <Loader /> : <span>Загрузка</span>;
  return (
    <ButtonStyle
      className={appearance}
      type={type}
      disabled={disabled}
      isLoading={isLoading}
    >
      {LeftIcon && !isLoading && <LeftIcon />}
      {caption && !isLoading && <span>{caption}</span>}
      {RightIcon && !isLoading && <RightIcon />}
      {isLoading && pickedLoader}
    </ButtonStyle>
  );
};
