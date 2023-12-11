import React from "react";
import styled from "styled-components";
import area51Box from "../../assets/Box/area51Box.png";

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
  button{
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    border: none;
    border-top: 1px solid #e0e0e0;
    cursor: pointer;
    outline: none;
    transition: all .3s ease-in-out;
    &:hover{
      background-color: #e0e0e0;
    }
  }
`;

const Cart = () => {
  return (
    <CartContainer>
      <CartTop>
        <img src={area51Box} alt="" />
      </CartTop>
      <CardBottom>
        <h2>AREA 51</h2>
        <span>
          Погрузитесь в тайны Area 51 с этим сюрприз-боксом, полным уникальных
          сувениров и загадочных артефактов.
        </span>
        <button type="button">Замовити</button>
      </CardBottom>
    </CartContainer>
  );
};

export default Cart;
