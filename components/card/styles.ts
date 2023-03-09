import styled, { css } from "styled-components";
import { FeatureTypes } from ".";

export const Container = styled.div`
  padding: 40px 0 0 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.gray100};
`;

export const Icon = styled.div<FeatureTypes>`
  width: 120px;
  height: 120px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, bgColor }) => css`
    background: ${theme.colors[bgColor as keyof typeof theme.colors]};
  `}
`;

export const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  padding: 20px 20px 20px 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
