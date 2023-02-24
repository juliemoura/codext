import styled, { css } from "styled-components";
import { PrimaryTypes } from ".";

export const Container = styled.div<PrimaryTypes>`
  ${({ theme, width }) => css`
    font-family: ${theme.fontFamily.ubuntu};
    background: ${theme.colors.blue300};
    color: ${theme.colors.white};
    width: ${width === "max-content" ? "max-content" : "100%"};

    &:hover {
      background: ${theme.colors.blue200};
      color: ${theme.colors.blue400};
      cursor: pointer;
    }
  `};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  padding: 10px 25px;
  border-radius: 5px;
`;

export const Title = styled.p<PrimaryTypes>``;
