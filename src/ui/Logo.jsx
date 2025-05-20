import styled from "styled-components";

// import logoLight from "../data/img/logo-light.png";
import logoLight from "/logo-light.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

{
  /* <Img src="logo-light.png" alt="Logo" /> */
}
function Logo() {
  return (
    <StyledLogo>
      <Img src={logoLight} alt="Logo-light" />
    </StyledLogo>
  );
}

export default Logo;
