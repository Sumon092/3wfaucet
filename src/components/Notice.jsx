import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 70px;
background-color:#9B1FF9;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:16px;
font-weight:500;
`

const Notice = () => {
    return (
        <Container>
            Notice Here
        </Container>
    );
};

export default Notice;