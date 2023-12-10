import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Bungee Spice', sans-serif;
    font-size: 40px;
`

const Main = () => {
    return(
        <MainContainer>
            <h1>Lxrwar Shop</h1>
        </MainContainer>
    );
}

export default Main;