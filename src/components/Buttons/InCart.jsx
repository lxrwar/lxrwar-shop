import React from "react";
import styled from "styled-components";

const InCartContainer = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(to right, #e79f05 50%, #f5f5f5 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: "Fira Sans", sans-serif;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
    background-position: left bottom;
  }
`;

const InCart = () => {
  return <InCartContainer>In Cart</InCartContainer>;
};

export default InCart;
