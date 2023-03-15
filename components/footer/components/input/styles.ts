import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 0 0 0 20px;
  width: max-content;
`;

export const InputText = styled.input`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 0 4px 4px 0;
  border: none;
  background: ${({ theme }) => theme.colors.blue200};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.blue400};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;
