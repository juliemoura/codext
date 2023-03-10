import { Col, Row } from "antd";
import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled(Row)`
  padding: 150px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 60px 20px;
  } ;
`;

export const LeftContainer = styled(Col)`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  @media (max-width: 786px) {
    margin-bottom: 0;
  }
`;

export const RightContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContentInformation = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  gap: 10px;
`;

export const Icon = styled.div``;

export const TextContent = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
