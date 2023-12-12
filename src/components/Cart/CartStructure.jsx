import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import area51Box from "../../assets/Box/area51Box.png";
import mistakeBox from "../../assets/Box/mistakeBox.png";
import rainbowBox from "../../assets/Box/rainbowBox.png";
import confettiTrands from "../../assets/confettiTrands.png";

const CartStructureContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  h2 {
    font-family: "Bungee Spice", sans-serif;
    font-size: 30px;
    text-align: center;
  }
  #title {
    font-family: "Fira Sans", sans-serif;
    text-align: center;
    font-size: 40px;
    margin: 100px 0;
  }
  .shadowImg {
    position: absolute;
    z-index: -1;
    width: 500px;
  }
  .shadowImg:nth-child(3) {
    bottom: 0;
    left: 0;
  }
  .shadowImg:nth-child(2) {
    top: 0;
    right: 0;
  }
`;
const CartsContainer = styled.div`
  display: flex;
  margin: 0 100px 100px 100px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CartStructure = () => {
  const Carts = [
    {
      img: area51Box,
      title: "AREA 51",
      description:
        "Dive into the mysteries of Area 51 with this surprise box, full of unique souvenirs and mysterious artifacts. Hurry up and grab it before it's too late!",
    },
    {
      img: mistakeBox,
      title: "MISTAKE",
      description:
        "The 'Mistake' surprise box is a box full of surprises! Each box contains unique items that have their own charm and uniqueness.",
    },
    {
      img: rainbowBox,
      title: "RAINBOW",
      description:
        "The 'Rainbow' surprise box is an explosion of color and joy! Each box contains colorful surprises that will surely lift your spirits.",
    },
  ];
  return (
    <CartStructureContainer>
      <h2 id="title">In Trends</h2>
      <img className="shadowImg" src={confettiTrands} alt="" />
      <img className="shadowImg" src={confettiTrands} alt="" />
      <CartsContainer>
        {Carts.map((cart, index) => (
          <Cart data={cart} key={index} />
        ))}
      </CartsContainer>
    </CartStructureContainer>
  );
};

export default CartStructure;
