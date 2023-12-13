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
        text-align: center;
        backdrop-filter: blur(10px);
    }
`
const StickyContainer = styled.div`
    position: sticky;
    width: 100%;
    margin: 370px 0;
    top: 0px;
`;

const Main = () => {
    return(
        <MainContainer id="Home">
            <StickyContainer>
                <h1>Lxrwar Shop</h1>
            </StickyContainer>
        </MainContainer>
    );
}

export default Main;