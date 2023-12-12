import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
`;
const CartTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  span{
    margin: 10px 0;
  }
  button {
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #e79f05 50%, #f5f5f5 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: none;
  border-top: 1px solid #e0e0e0;
  cursor: pointer;
  outline: none;
  font-family: 'Fira Sans', sans-serif;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
    background-position: left bottom;
  }
  }
`;

const Cart = ({ data }) => {
  return (
    <CartContainer>
      <CartTop>
        <img src={data.img} alt="" />
      </CartTop>
      <CardBottom>
        <h2>{data.title}</h2>
        <span>{data.description}</span>
        <button type="button">Замовити</button>
      </CardBottom>
    </CartContainer>
  );
};

export default Cart;
