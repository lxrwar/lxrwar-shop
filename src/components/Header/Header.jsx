import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: black;
  height: 70px;
  color: white;
  font-size: large;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  #linkStyle{
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        color: gray;
    }
  }
`;
const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
`;
const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <RightContent>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
          Home
        </Link>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
          About As
        </Link>
      </RightContent>
      <LeftContent>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
          Auth
        </Link>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
          Like
        </Link>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
          Cart
        </Link>
      </LeftContent>
    </HeaderContainer>
  );
};

export default Header;
