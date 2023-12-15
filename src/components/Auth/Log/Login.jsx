import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';
import BackIMG from "../../../assets/Svg/Back.svg";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
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
    justify-content: center;
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

const LoginInput = styled.input`
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

const LoginButton = styled.button`
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

const Login = () => {

return (
    <LoginContainer>
        <LoginForm>
            <h2>Login</h2>
            <LoginInput type="text" placeholder="Username" />
            <LoginInput type="password" placeholder="Password" />
            <div className="navigation">
                <Link to="/"><ReactSVG src={BackIMG} /></Link>
                <LoginButton>Login</LoginButton>
                <Link to="/register">Register</Link>
            </div>
        </LoginForm>
    </LoginContainer>
);
};

export default Login;
