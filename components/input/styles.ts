import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const InputContent = styled.input`
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.fs75};
  font-family: ${({ theme }) => theme.fontFamily.inter};

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.transparent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray100};
    font-size: ${({ theme }) => theme.fontSize.fs75};
    font-family: ${({ theme }) => theme.fontFamily.inter};
  }
`;
