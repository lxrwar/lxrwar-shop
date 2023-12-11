import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

const CartStructureContainer = styled.div`
    display: flex;
    margin: 100px;
`

const CartStructure = () => {
    return(
        <CartStructureContainer>
            <Cart/>
        </CartStructureContainer>
    );
}

export default CartStructure;