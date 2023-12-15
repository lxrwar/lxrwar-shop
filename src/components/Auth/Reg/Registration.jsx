import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import BackIMG from "../../../assets/Svg/Back.svg";

const RegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  a:active {
    color: gray;
  }
  .navigation {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
        }
    }
  }
`;

const RegInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 16px;
  font-family: "Fira Sans", sans-serif;
`;

const RegButton = styled.button`
  padding: 5px 10px;
  background-color: black;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const Registration = () => {
  return (
    <RegContainer>
      <RegForm>
        <h2>Register</h2>
        <RegInput name="name" type="text" placeholder="Username" />
        <RegInput name="email" type="email" placeholder="Email" />
        <RegInput name="password" type="password" placeholder="Password" />
        <div className="navigation">
          <Link to="/">
            <ReactSVG src={BackIMG} />
          </Link>
          <RegButton>Register</RegButton>
          <Link to="/login">Login</Link>
        </div>
      </RegForm>
    </RegContainer>
  );
};

export default Registration;
