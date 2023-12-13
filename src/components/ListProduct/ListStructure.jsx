import React from "react";
import styled from "styled-components";
import Search from "./Search";
import CardProduct from "./CardProduct";
import CyberBoxIMG from "../../assets/Box/CyberBox.png";
import NeitroBox from "../../assets/Box/NeitroBox.png";
import scamBox from "../../assets/Box/scamBox.png";
import UkraineBox from "../../assets/Box/UkraineBox.png";
import usaBox from "../../assets/Box/usaBox.png";
import switzerlandBox from "../../assets/Box/switzerlandBox.png";
import SilentBox from "../../assets/Box/SilentBox.png";
import WhyBox from "../../assets/Box/WhyBox.png";
import MarmelBox from "../../assets/Box/marmelBox.png";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;

  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
  }
`;
const ListStructure = () => {
  const boxes = [
    {
      title: "Cyber Box",
      price: 149,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: CyberBoxIMG,
    },
    {
      title: "Neitro Box",
      price: 89,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: NeitroBox,
    },
    {
      title: "Scam Box",
      price: 199,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: scamBox,
    },
    {
      title: "Ukraine Box",
      price: 149,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: UkraineBox,
    },
    {
      title: "Silent Box",
      price: 89,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: SilentBox,
    },
    {
      title: "Switzerland Box",
      price: 199,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: switzerlandBox,
    },
    {
      title: "USA Box",
      price: 149,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: usaBox,
    },
    {
      title: "Why? Box",
      price: 89,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: WhyBox,
    },
    {
      title: "Marmel Box",
      price: 199,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: MarmelBox,
    },
  ];
  return (
    <ListContainer id="AllProducts">
      <h2>Search Box</h2>
      <Search />
      <div className="cards">
        {boxes.map((box, index) => (
          <CardProduct data={box} key={index} />
        ))}
      </div>
    </ListContainer>
  );
};

export default ListStructure;
