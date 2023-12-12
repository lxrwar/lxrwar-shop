import React from 'react';
import styled from 'styled-components';
import BoxesIMG from '../../assets/Box/Boxes.png';

const BuyTogetherContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const BuyTogether = () => {
    return(
        <BuyTogetherContainer>
            <h2></h2>
            <img src={BoxesIMG} alt="" />
            <span></span>
        </BuyTogetherContainer>
    );
}

export default BuyTogether;
