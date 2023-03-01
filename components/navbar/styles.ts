import styled from "styled-components";

export const ContainerDesktop = styled.nav`
  display: none;

  @media (min-width: 1080px) {
    display: block;
  }
`;

export const ContainerMobile = styled.nav`
  display: block;

  @media (min-width: 1080px) {
    display: none;
  }
`;
