import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import CartStructure from "../Cart/CartStructure";
import BuyTogether from "../BuyTogether/BuyTogether";
import ListStructure from "../ListProduct/ListStructure";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const MainPageContainer = styled.div`
  font-family: "Fira Sans", sans-serif;
`;
const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Main />
      <CartStructure />
      <BuyTogether />
      <ListStructure />
      <Footer />
    </MainPageContainer>
  );
};

export default MainPage;
