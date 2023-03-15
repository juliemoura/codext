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
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled(Link)<PrimaryTypes>`
  color: ${({ theme, color }) => theme.colors[color as keyof typeof theme.colors]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.fs100};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;
