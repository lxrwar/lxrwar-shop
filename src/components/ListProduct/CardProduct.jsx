import React from "react";
import styled from "styled-components";
import InCartButton from "../Buttons/InCart";

const CardContainer = styled.div`
  margin: 100px 0;
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  h3 {
    width: 30%;
    text-align: center;
    padding: 5px;
    background-color: black;
    color: white;
  }
  h3:nth-child(2) {
    width: 30%;
    text-align: center;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    background-color: white;
    color: black;
  }
  .price {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const CardProduct = ({ data }) => {
  return (
    <CardContainer>
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <span>{data.description}</span>
      <div className="price">
        <h3>{Math.round(data.price * 0.7)}$</h3>
        <h3>{data.price}$</h3>
      </div>
      <InCartButton />
    </CardContainer>
  );
};

export default CardProduct;
