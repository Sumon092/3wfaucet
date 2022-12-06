import React from 'react';
import styled from 'styled-components'
import HomeContents from '../components/HomeContents';
import Navbar from '../components/NavBar';
import Notice from '../components/Notice';

const Container = styled.div`
    background-color: #eef2fe;
`

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Notice />
            <HomeContents />
        </Container>
    );
};

export default Home;