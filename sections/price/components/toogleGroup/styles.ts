import * as ToggleGroup from "@radix-ui/react-toggle-group";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 882px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 883px) and (max-width: 1090px) {
    gap: 10px;
  }

  @media (min-width: 1091px) {
    gap: 50px;
  }
`;

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  button {
    all: unset;
  }

  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.blue300};
  border-radius: 4px;
  box-shadow: 0 2px 10px black;
  margin: 10px 0 70px 0;
  width: max-content;
`;

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  background-color: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.blue100};
  height: 35px;
  width: 35px;
  display: flex;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  margin-left: 1px;
  padding: 10px 20px;
  border-radius: 4px;

  &:first-child {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px 40px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px 40px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
    cursor: pointer;
  }

  &[data-state="on"] {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.purple100};
  }

  &[data-state="off"] {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    position: relative;
    outline: none;
  }
`;
