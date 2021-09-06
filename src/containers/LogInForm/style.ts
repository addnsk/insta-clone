import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  padding: 40px;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.mobile} {
    background-color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 50px;
`;

export const InputWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 6px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 8px 0;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 16px;

  & div {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) =>
      theme.colors.lightGray ? theme.colors.lightGray : "#dbdbdb"};
  }

  & span {
    padding: 0 10px;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    color: ${({ theme }) =>
      theme.colors.gray ? theme.colors.gray : "#8e8e8e"};
  }
`;

export const Error = styled.div`
  width: 100%;
  padding: 8px 0;

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) =>
      theme.colors.warning ? theme.colors.warning : "#E5494F"};
    text-align: center;
  }
`;
