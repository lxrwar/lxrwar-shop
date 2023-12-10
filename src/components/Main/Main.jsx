import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Main = () => {
    return(
        <MainContainer>
            <h1>Lxrwar Shop</h1>
        </MainContainer>
    );
}

export default Main;