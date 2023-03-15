import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsRoot = styled(Tabs.Root)`
  button,
  fieldset,
  input {
    all: unset;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 20px;
  height: 45px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  user-select: none;

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple150};
  }

  &:hover {
    cursor: pointer;
  }

  &[data-state="active"] {
    color: ${({ theme }) => theme.colors.purple150};
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
    padding: 5px 10px;
  }

  &[data-state="inactive"] {
    color: ${({ theme }) => theme.colors.gray300};
    padding: 5px 10px;
  }

  &:focus {
    outline: none;
  }
`;

export const TabsContent = styled(Tabs.Content)`
  outline: none;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;
