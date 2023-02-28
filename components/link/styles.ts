import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.div<{ color: string, hoverColor: string }>`
  width: max-content;
  padding-bottom: 2px;

  ${({ theme, color, hoverColor }) => css`
    font-family: ${theme.fontFamily.ubuntu};
    color: ${theme.colors[color as keyof typeof theme.colors]};

    &:hover {
      color: ${theme.colors[hoverColor as keyof typeof theme.colors]};
      border-bottom: 1px solid ${theme.colors[hoverColor as keyof typeof theme.colors]};
      transition: border-bottom 0.6s ease-in-out, color ease-in-out;
    }
  `}
`;
