import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/mainBG.png"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Bungee Spice', sans-serif;
    font-size: 40px;
    background-image: url(${bgIMG});
    background-size: cover;
    h1{
        margin: 370px 0;
        width: 100%;
        text-align: center;
        backdrop-filter: blur(10px);
    }
`

const Main = () => {
    return(
        <MainContainer>
            <h1>Lxrwar Shop</h1>
        </MainContainer>
    );
}

export default Main;