import styled, { css } from "styled-components";
import { PrimaryTypes } from ".";

export const Container = styled.div<PrimaryTypes>`
  ${({ theme, width, bgColor, hoverColor }) => css`
    font-family: ${theme.fontFamily.ubuntu};
    background: ${theme.colors[bgColor as keyof typeof theme.colors]};
    color: ${theme.colors.white};
    width: ${width === "max-content" ? "max-content" : "100%"};

    &:hover {
      background: ${theme.colors[hoverColor as keyof typeof theme.colors]};
      color: ${theme.colors.black};
      cursor: pointer;
    }
  `};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  padding: 15px 25px;
  border-radius: 3px;
`;

export const Title = styled.p<PrimaryTypes>``;
