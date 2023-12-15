import React from "react";
import styled from "styled-components";
import BoxesIMG from "../../assets/Box/Boxes.png";
import InCartButton from "../Buttons/InCart";

const BuyTogetherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 125px 100px;
  img {
    width: 40%;
  }
  button {
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
  }
  h2 {
    font-size: 40px;
    color: #ffbf00;
  }
  .orderForm {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-left: 50px;
    span {
      padding: 20px 0;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;

const BuyTogether = () => {
  return (
    <BuyTogetherContainer id="BoxSet">
      <img src={BoxesIMG} alt="" />
      <div className="orderForm">
        <h2>Buy More, Save More!</h2>
        <span>
          Experience the thrill of unboxing multiple surprises with our special
          bundle offer! Each box in this bundle is carefully curated with unique
          items that promise a delightful surprise. When you buy this bundle,
          you're not just getting more surprises, but you're also getting a
          better value for your money. Instead of buying each box separately,
          save more with this bundle and enjoy a variety of surprises. It's more
          fun, more surprises, and more savings. Don't wait, get this bundle now
          and start the unboxing fun!
        </span>
        <InCartButton />
      </div>
    </BuyTogetherContainer>
  );
};

export default BuyTogether;
