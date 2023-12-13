import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: black;
    color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>  
            <h1>Lxrwar production</h1>
        </FooterContainer>
    );
};

export default Footer;
