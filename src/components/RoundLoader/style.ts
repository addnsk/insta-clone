import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const Spiner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;

  & div {
    transform-origin: 10px 10px;
    animation: ${loaderAnimation} 1.35s linear infinite;
  }

  & div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 14px;
    left: 9px;
    width: 2px;
    height: 6px;
    border-radius: 20%;
    background: ${({ color, theme }) =>
      color ? theme.colors[color] : "#ffffff"};
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.2s;
  }
  & div:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: -1.05s;
  }
  & div:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: -0.9s;
  }
  & div:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: -0.75s;
  }
  & div:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: -0.6s;
  }
  & div:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: -0.45s;
  }
  & div:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: -0.3s;
  }
  & div:nth-child(8) {
    transform: rotate(315deg);
    animation-delay: -0.15s;
  }
`;
