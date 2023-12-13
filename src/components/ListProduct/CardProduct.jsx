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
      <div className="price">
      <h3>{Math.round(data.price * 0.7)}$</h3>
      <h3>{data.price}$</h3>
      </div>
      <button>In Cart</button>
    </CardContainer>
  );
};

export default CardProduct;
