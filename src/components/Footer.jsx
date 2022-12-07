import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding:25px 0px;
    margin-top: 20px;
    background-color: #FFFFFF;
`
const FooterText = styled.span`
    font-size: 13px;
`

const Footer = () => {
    return (
        <Container>
            <FooterText>&copy; copyright 2022 - All Right Reserved by 3WFaucet</FooterText>
        </Container>
    );
};

export default Footer;