import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 90%;
  height: 70px;
  padding: 0 100px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  font-size: large;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  #linkStyle{
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
      transform: scale(1.1);
        color: #ffbf00;
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
