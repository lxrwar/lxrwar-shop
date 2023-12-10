import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const RightContent = styled.div`
  display: flex;
`;
const LeftContent = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <RightContent>
        <Link to="path" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="path" smooth={true} duration={500}>
          About As
        </Link>
      </RightContent>
      <LeftContent>
        <Link to="path" smooth={true} duration={500}>
          Auth
        </Link>
        <Link to="path" smooth={true} duration={500}>
          Like
        </Link>
        <Link to="path" smooth={true} duration={500}>
          Cart
        </Link>
      </LeftContent>
    </HeaderContainer>
  );
};

export default Header;
