import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple500};
  padding: 15px 110px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > :nth-child(5) {
    margin-right: 30px;
  }
`;
