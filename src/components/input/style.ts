import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  overflow: hidden;
`;

export const Label = styled.label`
  display: inline-flex;
  position: relative;

  background-color: #fafafa;
  z-index: 0;
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 25%;
  left: 8px;
  z-index: -1;
  transition: ease-in 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;

  &.filled {
    top: 0;
    font-size: 10px;
  }
`;

export const TextField = styled.input`
  width: 250px;
  height: 20px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  font-size: 12px;
  font-weight: 400;
  color: #262626;

  &.filled {
    padding: 14px 8px 2px 8px;
  }

  &:focus {
    outline: none;
    border: 1px solid #a8a8a8;
  }

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
  }
`;

export const Button = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0 8px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  font-size: 14px;
  font-weight: 600;
  color: #262626;

  &.filled {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
