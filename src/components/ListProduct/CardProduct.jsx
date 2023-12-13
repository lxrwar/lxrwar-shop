import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 100px 0;
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  h3 {
    width: 30%;
    text-align: center;
    padding: 5px;
    background-color: black;
    color: white;
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
    font-family: "Fira Sans", sans-serif;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #ffffff;
      background-position: left bottom;
    }
  }
`;

const CardProduct = ({ data }) => {
  return (
    <CardContainer>
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <span>{data.description}</span>
      <h3>{data.price} $</h3>
      <button>In Cart</button>
    </CardContainer>
  );
};

export default CardProduct;
