import Link from "next/link";
import styled, { css } from "styled-components";
import { PrimaryTypes } from ".";

export const Container = styled.button<PrimaryTypes>`
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
  border: none;
`;

export const Title = styled(Link)<PrimaryTypes>`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.fs100};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;
