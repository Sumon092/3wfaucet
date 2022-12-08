import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Ethereum from '../assets/etherieum.png'
import BNB from '../assets/bnb.png'


const Container = styled.div`
height: 80px;
background-color: #FFFFFF;
`
const Wrapper = styled.div`
padding: 0px 30px;
height: 100%;
display: flex;
align-items:center;
justify-content: space-between;

`
const Left = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items: center;
position: relative;
`
const Logo = styled.h1`
font-weight:600;
font-size:25px;
color:#9B1FF9;
`
const MenuItem = styled.div`
cursor:pointer;
margin-left: 10px;

`
const MenuButton = styled.button`
   display :flex ;
   justify-content:center;
   align-items: center;
   border: ${props => props.left ? '1px solid #ddd' : '2px solid #9B1FF9'};
   color:${props => props.left ? '#6d7380' : '#9B1FF9'};
   padding: ${props => props.left ? '10px 12px' : '9px 20px'};
   background:transparent;
   font-weight:${props => props.left ? '400' : '600'}; 
   border-radius:3px;
   cursor:pointer;
`
const ButtonText = styled.span`
    font-size:14px;
    margin-right: ${props => props.spacing === 'right' && '7px'};
    margin-left: ${props => props.spacing === 'left' && '7px'};
`

const UserToggler = styled.div`
    color:#6d7380;
    background-color: #EEEEEE;
    font-size:25px;
    padding:5px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const UserMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 162px;
    height: auto;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 0 4px 9px -8px grey;
    margin: 0;
`
const Ul = styled.ul`
    text-decoration: none;
    padding: 10px;
    margin: 0;
`
const Li = styled.li`
    list-style-type: none;
    font-size:14px;
    display:block;
    color:#6d7380;
    padding: 5px 10px;
    :hover{
        background-color: #f5f7fd;
        cursor:pointer;
    }
`
const Image = styled.img`
    margin:0px 8px -2px 0px;
    height: 15px;
    width: 15px;
`
const NetworkContainer = styled.div`
    position: relative;
`
const NetworkList = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 225px;
    height: auto;
    background: #fff;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 4px 9px -8px grey;
`
const Network = styled.div`
    
`
const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    const [network, setNetwork] = useState(false);
    const handleNetwork = () => {
        setNetwork(!network);
    };



    return (
        <Container>
            <Wrapper>
                <Link style={{ textDecoration: 'none' }} to="/"><Left><Logo>Faucets</Logo></Left></Link>
                <Right>
                    <NetworkContainer onClick={handleNetwork}>
                        <MenuItem >
                            <MenuButton left>
                                <Network>
                                    <Image src={Ethereum} />
                                    <ButtonText spacing='right'>Ethereum kovan</ButtonText>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                                </Network>

                            </MenuButton>
                        </MenuItem>
                        {
                            network && <NetworkList >
                                <Ul>
                                    <Li><Image src={Ethereum} />Arbitrum Rinkeby</Li>
                                    <Li><Image src={BNB} />Avalanche Fuji</Li>
                                    <Li><Image src={Ethereum} />BNB Chain Testnet</Li>
                                    <Li><Image src={Ethereum} />Ethereum Rinkeby</Li>
                                    <Li><Image src={Ethereum} />Fantom Testnet</Li>
                                    <Li><Image src={Ethereum} />Harmony Testnet</Li>
                                    <Li><Image src={Ethereum} />Poa network sokol</Li>
                                    <Li><Image src={Ethereum} />Polygon Mumbai</Li>
                                </Ul>
                            </NetworkList>
                        }

                    </NetworkContainer>

                    <MenuItem>
                        <MenuButton right>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path></svg>
                            <ButtonText spacing='left'>Connect Wallet</ButtonText>
                        </MenuButton>

                    </MenuItem>

                    <MenuItem>
                        <UserToggler onClick={handleClick}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                        </UserToggler>
                    </MenuItem>
                    {active && <UserMenu>
                        <Ul>
                            <Link style={{ textDecoration: 'none' }} to='/login' replace={true}><Li>Login</Li></Link>

                            <Link replace={true} style={{ textDecoration: 'none' }} to='/signup'><Li>Signup</Li></Link>
                            <Li>FAQs</Li>
                        </Ul>
                    </UserMenu>}

                </Right>
            </Wrapper>

        </Container>
    );
};

export default Navbar;