import styled, { css } from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";

export const AccordionRoot = styled(Accordion.Root)`
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: 3px;
  position: relative;

  button {
    border: none;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  overflow: hidden;

  &:focus-within {
    position: relative;
    z-index: 1;
  }
`;

export const AccordionTrigger = styled(Accordion.Trigger)<{
  colorOn: string;
  colorOff: string;
}>`
  font-family: ${({ theme }) => theme.fontFamily.ubuntu};
  padding: 25px 20px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  width: 100%;
  gap: 50px;


  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    background: ${theme.colors.transparent};
    font-size: ${theme.fontSize.fs100};
  `}

  &:focus {
    outline: none;
  }

  > p {
    padding-left: 10px;
  }

  &[data-state="open"] {
    > span {
      display: block;
      color: ${({ theme, colorOn }) =>
        theme.colors[colorOn as keyof typeof theme.colors]};
    }

    > p,
    svg {
      font-weight: 500;
      color: ${({ theme, colorOn }) =>
        theme.colors[colorOn as keyof typeof theme.colors]};
    }
  }

  &[data-state="closed"] {
    > span {
      display: none;
      color: ${({ theme, colorOff }) =>
        theme.colors[colorOff as keyof typeof theme.colors]};
    }

    > p,
    svg {
      color: ${({ theme, colorOff }) =>
        theme.colors[colorOff as keyof typeof theme.colors]};
    }

    > svg {
      transform: rotate(180deg);
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple100};
    cursor: pointer;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  > div {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const AccordionContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 15px;
  margin: 0 20px;
  padding: 10px 0 10px 0;

  &[data-state="open"] {
    animation: slideDown 0.2ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: slideUp 0.2ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes slideUp {
    from {
      height: 100%;
    }
    to {
      height: 0;
    }
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
    border-bottom: 1px solid ${({theme}) => theme.colors.gray100};
`;
