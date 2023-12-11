import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import area51Box from "../../assets/Box/area51Box.png";
import mistakeBox from "../../assets/Box/mistakeBox.png";
import rainbowBox from "../../assets/Box/rainbowBox.png";

const CartStructureContainer = styled.div`
  display: flex;
  margin: 100px;
  justify-content: space-between;
`;

const CartStructure = () => {
  const Carts = [
    {
      img: area51Box,
      title: "AREA 51",
      description:
        "Погрузитесь в тайны Area 51 с этим сюрприз-боксом, полным уникальных сувениров и загадочных артефактов.",
    },
    {
      img: mistakeBox,
      title: "MISTAKE",
      description:
        "Сюрприз-бокс Mistake - это коробка полная неожиданностей! Каждый бокс содержит уникальные предметы, которые обладают особым шармом и уникальностью.",
    },
    {
      img: rainbowBox,
      title: "RAINBOW",
      description:
        "Сюрприз-бокс 'Rainbow' - это взрыв цвета и радости! Каждый бокс содержит разноцветные сюрпризы, которые обязательно поднимут вам настроение.",
    },
  ];
  return (
    <CartStructureContainer>
      {Carts.map((cart) => (<Cart data={cart} />))}
    </CartStructureContainer>
  );
};

export default CartStructure;
