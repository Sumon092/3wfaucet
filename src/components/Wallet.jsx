import React from 'react';
import styled from 'styled-components';
import ReCaptcha from './ReCaptcha';

const Container = styled.div`
    height: 700px;
    background-color: #ffffff;
    padding: 25px 20px;
`
const Caution = styled.div`
    display: flex;
    align-items: center;
    background-color: #eef2fe;
    padding: 10px;
    height: auto;
`
const CautionText = styled.p`
    color:#000000;
    margin: 0px 0px 0px 10px;
    font-size:14px;
`
const Logo = styled.span`
    color: #9B1FF9;
    font-size:18px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width:50%;
    
`
const InputLabel = styled.label`
    font-weight: 600;
    color:#9B1FF9;
    font-size:13px;
`
const InputBox = styled.div`
    display: flex;
    width:${props => props.bottom ? '50%' : ''} ;
    background-color: ${props => props.bottom ? '#EFEFEF4D' : 'transparent'};
    justify-content: space-between;
    margin: 5px 0px 0px;
    padding: 10px;
    border:1px solid #eee;
`
const Input = styled.input`
    outline: none;
    width: 100%;
    border:none;
    background: transparent;
`
const RequestType = styled.div`
    margin:10px 0px 0px;
`
const InputBottom = styled.div`
    display: flex;
`
const Button = styled.button`
    color:#FFFFFF;
    font-size:13px;
    padding: 10px 15px;
    background-color: #9B1FE9;
    border: none;
    font-weight: 600;
    border-radius: 3px;
    cursor:pointer;
`

const Wallet = () => {
    return (
        <Container>
            <Caution>
                <Logo>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path></g></svg>
                </Logo>
                <CautionText>
                    Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.
                </CautionText>
            </Caution>
            <InputContainer>
                <InputLabel>Wallet Address</InputLabel>
                <InputBox>
                    <Input placeholder='Wallet Address...' />
                </InputBox>
                <RequestType>
                    <InputLabel>Request Type</InputLabel>
                    <InputBottom>
                        <InputBox bottom style={{ marginRight: '15px' }}>
                            <Input disabled value='20 Test Link' />
                        </InputBox>
                        <InputBox bottom>
                            <Input disabled value='0.5 ETH' />
                        </InputBox>
                    </InputBottom>
                </RequestType>
            </InputContainer>
            <ReCaptcha />
            <Button>Send Request</Button>
        </Container >
    );
};

export default Wallet;