import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import { ContainerDesktop, ContainerMobile } from "./styles";

const Navbar = () => {
  return (
    <>
      <ContainerDesktop>
        <Desktop />
      </ContainerDesktop>

      <ContainerMobile>
        <Mobile />
      </ContainerMobile>
    </>
  );
};

export { Navbar };
