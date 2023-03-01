import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple500};
`;
