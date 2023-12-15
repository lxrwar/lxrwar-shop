import React from "react";
import styled from "styled-components";
import InCartButton from "../Buttons/InCart";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  background-color: #fff;
  padding: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const CartTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 10px 0;
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
        <InCartButton/>
      </CardBottom>
    </CartContainer>
  );
};

export default Cart;
