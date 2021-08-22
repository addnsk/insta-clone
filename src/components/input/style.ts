import styled from "styled-components";

const indent = "8px";

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 266px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.backgroundGray ? theme.colors.backgroundGray : "#fafafa"};
  border: 1px solid
    ${({ theme }) =>
      theme.colors.lightGray ? theme.colors.lightGray : "#dbdbdb"};
  border-radius: ${({ theme }) =>
    theme.radiuses.init ? theme.radiuses.init : "3px"};

  &.focused {
    border-color: ${({ theme }) =>
      theme.colors.activeGray ? theme.colors.activeGray : "#a8a8a8"};
  }
`;

export const Label = styled.label`
  display: inline-flex;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  position: relative;
`;

export const Placeholder = styled.span`
  width: 100%;
  padding: 0 ${indent};
  box-sizing: border-box;
  position: absolute;
  top: 25%;
  left: 0;

  transition: ease-in 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;

  color: ${({ theme }) => (theme.colors.gray ? theme.colors.gray : "#8e8e8e")};

  &.filled {
    top: 0;
    font-size: 10px;
  }
`;

export const TextField = styled.input`
  width: 100%;
  height: 20px;
  padding: ${indent};
  background-color: transparent;
  border: none;
  outline: none;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => (theme.colors.dark ? theme.colors.dark : "#262626")};

  &.filled {
    padding: 14px ${indent} 2px ${indent};
  }
`;

export const Button = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 ${indent};
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => (theme.colors.dark ? theme.colors.dark : "#262626")};

  &.filled {
    display: flex;
    align-self: center;
  }
`;
