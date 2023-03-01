import { Col, Row } from "antd";
import styled from "styled-components";

export const Container = styled(Row)`
  display: flex;
  padding: 40px 30px;
  height: max-content;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple500};
`;

export const LeftContainer = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 40%;
`;

export const RightContainer = styled(Col)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
