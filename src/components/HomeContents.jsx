import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0px 25px;
    background-color: #eef2fe;
    height: 100vh;
    margin: 0px;
`
const TextContainer = styled.div`
    margin: 48px 0px;
`
const Title = styled.h2`
    color:#9B1FF9;
    margin: 0px 0px 20px;
    font-size: 35px;
    font-weight: 600;
`
const Text = styled.p`
    
`

const HomeContents = () => {
    return (
        <Container>
            <TextContainer>
                <Title>Request testnet LINK</Title>
                <Text>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br />
                    create and test your own oracle and Chainlinked smart contract
                </Text>
            </TextContainer>
        </Container>
    );
};

export default HomeContents;