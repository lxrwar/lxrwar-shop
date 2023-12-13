
import React from "react";
import styled from "styled-components";

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
                <LoginButton>Login</LoginButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
