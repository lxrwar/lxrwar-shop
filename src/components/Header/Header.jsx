import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { ReactSVG } from "react-svg";
import likeIMG from "../../assets/Svg/like.svg";
import cartIMG from "../../assets/Svg/cart.svg";
import userIMG from "../../assets/Svg/user.svg";

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
  #linkStyle {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
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
  svg {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    &:hover {
      fill: #ffbf00;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <RightContent>
        <Link id="linkStyle" to="Home" smooth={true} duration={500}>
          Home
        </Link>
        <Link id="linkStyle" to="BoxSet" smooth={true} duration={500}>
          About As
        </Link>
      </RightContent>
      <LeftContent>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
        <ReactSVG src={userIMG}/>
        </Link>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
        <ReactSVG src={likeIMG}/>
          </Link>
        <Link id="linkStyle" to="path" smooth={true} duration={500}>
        <ReactSVG src={cartIMG}/>
        </Link>
      </LeftContent>
    </HeaderContainer>
  );
};

export default Header;
