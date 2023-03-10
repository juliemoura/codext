import styled, { css } from "styled-components";
import { CardTypes } from ".";

export const Container = styled.div<CardTypes>`
  width: max-content;
  border-radius: 4px;
  padding: 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme, hoverColorCard }) => css`
    border: 1px solid ${theme.colors.gray100};
    box-shadow: 0px 0px 10px 0px ${theme.colors.gray100};

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: 0px 0px 10px 0px
        ${theme.colors[hoverColorCard as keyof typeof theme.colors]};
      transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
    }
  `};
`;

export const TypographyContainer = styled.div`
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};
  padding: 5px 10px;
  margin: 0 0 30px 0;
`;

export const InformationsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 40px 0;
  gap: 10px;
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
`;
