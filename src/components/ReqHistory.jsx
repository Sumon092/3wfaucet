import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Table from './Table';
import Table2 from './Table2';

const Container = styled.div`
    margin: 30px 0px 0px;
`
const Title = styled.p`
    font-size: 15px;
    font-weight:600;
    margin: 0px 0px 20px;
`
const ButtonContainer = styled.div`
    margin: 0px 10px 0px 0px;
`
const Button = styled.button`
   border :none ;
   padding: 10px 15px;
   margin-right: 10px;
   font-size: 13px;
   background:#f5f7fd;
   border-radius: 3px;
   cursor:pointer;
   :active{
    background-color:#0004dc;
    color:#FFFFFF;
   }
`

const ReqHistory = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (

        <Container>
            <Title>Request History</Title>
            <ButtonContainer>
                <NavLink>
                    <Button onClick={handleClick} style={{
                        backgroundColor: active ? "#0004dc" : "#f5f7fd",
                        color: active ? "#FFFFFF" : ""
                    }}>
                        ETH Transaction History
                    </Button>
                </NavLink>
                <Button>TestLink Transaction History</Button>
            </ButtonContainer>
            {
                active ? <Table /> : <Table2 />
            }
        </Container>
    );
};

export default ReqHistory;