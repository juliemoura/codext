import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.blue500};
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const UpContent = styled(Row)`
  border-bottom: 1px dotted ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;

  @media (max-width: 1020px) {
    gap: 40px;
  }
`;

export const DownContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MediaContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const MediaContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  padding: 8px;
  display: flex;
`;
