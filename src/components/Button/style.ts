import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.props";

export const ButtonStyle = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 268px;
  height: 30px;

  & *:not(:last-child) {
    margin-right: 6px;
  }
  padding: 0 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  border: none;
  border-radius: ${({ theme }) =>
    theme.radiuses.init ? theme.radiuses.init : "3px"};
  box-sizing: border-box;

  cursor: pointer;

  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  & svg {
    width: 16px;
    height: 16px;
  }

  & span {
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.primary {
    background-color: ${({ theme }) =>
      theme.colors.primary ? theme.colors.primary : "#3e95ef"};
    color: ${({ theme }) =>
      theme.colors.light ? theme.colors.light : "#ffffff"};

    &:active {
      background-color: ${({ theme }) =>
        theme.colors.activePrimary ? theme.colors.activePrimary : "#79b4f4"};
    }

    & svg {
      fill: ${({ theme }) =>
        theme.colors.light ? theme.colors.light : "#ffffff"};
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${({ theme }) =>
          theme.colors.disabledPrimary
            ? theme.colors.disabledPrimary
            : "#c6dffa"};
      `}
  }

  &.ghost {
    background-color: ${({ theme }) =>
      theme.colors.transparent ? theme.colors.transparent : "transparent"};
    color: ${({ theme }) =>
      theme.colors.dark ? theme.colors.dark : "#262626"};

    &:active {
      color: ${({ theme }) =>
        theme.colors.gray ? theme.colors.gray : "#8e8e8e"};
    }

    & svg {
      fill: ${({ theme }) =>
        theme.colors.dark ? theme.colors.dark : "#262626"};
    }

    &:active svg {
      fill: ${({ theme }) =>
        theme.colors.gray ? theme.colors.gray : "#8e8e8e"};
    }
  }

  &.accentGhost {
    background-color: ${({ theme }) =>
      theme.colors.transparent ? theme.colors.transparent : "transparent"};
    color: ${({ theme }) =>
      theme.colors.primary ? theme.colors.primary : "#3e95ef"};

    &:active {
      color: ${({ theme }) =>
        theme.colors.activePrimary ? theme.colors.activePrimary : "#79b4f4"};
    }

    & svg {
      fill: ${({ theme }) =>
        theme.colors.primary ? theme.colors.primary : "#3e95ef"};
    }

    &:active svg {
      fill: ${({ theme }) =>
        theme.colors.activePrimary ? theme.colors.activePrimary : "#79b4f4"};
    }
  }

  &.facebook {
    background-color: ${({ theme }) =>
      theme.colors.transparent ? theme.colors.transparent : "transparent"};
    color: ${({ theme }) =>
      theme.colors.facebook ? theme.colors.facebook : "#3C5181"};

    & svg {
      fill: ${({ theme }) =>
        theme.colors.facebook ? theme.colors.facebook : "#3C5181"};
    }

    &:active {
      color: ${({ theme }) =>
        theme.colors.activeFacebook ? theme.colors.activeFacebook : "#7886A7"};
    }

    &:active svg {
      fill: ${({ theme }) =>
        theme.colors.activeFacebook ? theme.colors.activeFacebook : "#7886A7"};
    }
  }

  &.outline {
    border: 1px solid
      ${({ theme }) =>
        theme.colors.lightGray ? theme.colors.lightGray : "#dbdbdb"};
    background-color: ${({ theme }) =>
      theme.colors.transparent ? theme.colors.transparent : "transparent"};
    color: ${({ theme }) =>
      theme.colors.dark ? theme.colors.dark : "#262626"};

    & svg {
      fill: ${({ theme }) =>
        theme.colors.dark ? theme.colors.dark : "#262626"};
    }

    &:active {
      color: ${({ theme }) =>
        theme.colors.gray ? theme.colors.gray : "#8e8e8e"};
    }

    &:active svg {
      fill: ${({ theme }) =>
        theme.colors.gray ? theme.colors.gray : "#8e8e8e"};
    }
  }
`;
