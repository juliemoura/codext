import * as Switch from "@radix-ui/react-switch";
import styled from "styled-components";

export const SwitchRoot = styled(Switch.Root)`
  button {
    all: unset;
  }
  width: 50px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.purple500};
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.black};
  -webkit-tap-highlight-color: red;
  border: none;

  &:focus {
    outline: none;
  }
  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.colors.blue300};
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 9999px;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.black};
  transition: transform 100ms;
  transform: translateX(0px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;
