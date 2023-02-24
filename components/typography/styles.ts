import styled, { css } from "styled-components";
import { TypographyTypes } from ".";

export const Container = styled("h1").attrs<TypographyTypes>(({ tag }) => ({
  as: `${tag}`,
}))<TypographyTypes>`
  ${({ theme, fontSize, color, fontWeight, textAlign, fontFamily }) => css`
    font-family: ${theme.fontFamily[
      fontFamily as keyof typeof theme.fontFamily
    ]};
    font-size: ${theme.fontSize[fontSize as keyof typeof theme.fontSize]};
    color: ${theme.colors[color as keyof typeof theme.colors]};
    font-weight: ${theme.fontWeight[
      fontWeight as keyof typeof theme.fontWeight
    ]};
    text-align: ${textAlign};
  `}
  padding: 0;
  margin: 0;
`;
