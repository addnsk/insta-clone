import styled from "styled-components";

export const Link = styled.a`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${({ theme }) => (theme.colors.link ? theme.colors.link : "#123767")};

  cursor: pointer;

  &:active {
    color: ${({ theme }) =>
      theme.colors.activeFacebook ? theme.colors.activeFacebook : "#7886A7"};
  }
`;
