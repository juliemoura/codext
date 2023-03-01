import styled from "styled-components";
import { Drawer } from "antd";
import Link from "next/link";

export const Container = styled.div``;

export const ButtonDrawer = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DrawerContainer = styled(Drawer)``;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: left;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  flex-direction: column;
`;

export const LinkContent = styled(Link)`
  display: flex;
  gap: 10px;
`;
