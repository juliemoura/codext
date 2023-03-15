import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.purple150};
  width: 100%;
  border-radius: 5px;
  box-shadow: -5px 5px 5px ${({ theme }) => theme.colors.purple150};
  padding: 20px 30px 35px 30px;

  &:hover{
    background: ${({ theme }) => theme.colors.gray100};
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
  }

`;

export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const ImageContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextImageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;