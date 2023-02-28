import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > :nth-child(5) {
    margin-right: 30px;
  }
`;
