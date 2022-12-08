import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const Container = styled.div`
    background-color: #eef2fe;
`
const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const LoginContainer = styled.div`
    width: 30%;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 3px;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px -4px grey;
`
const Title = styled.h1`
    text-align: center;
    font-size:30px;
    font-weight:600px;
    margin: 0;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 10px;
    padding: 0px;
`
const InputLabel = styled.label`
    font-size:12px;
    font-weight: 600;
`
const InputWrapper = styled.div`
    border:0;
    border-bottom: 1px solid #b8b4b4;
    padding: 10px 0px;
    :focus{
        border-bottom: 1px solid #ff3;
    }
`
const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    
`
const Button = styled.button`
    width: 100%;
    background:#9b1fe9;
    padding:10px 15px;
    outline: none;
    border:none;
    font-size:15px;
    cursor:pointer;
    margin-top: 20px;
    margin-bottom:10px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    color:#FFF;
`
const LoginText = styled.p`
    font-size: ${props => props.or ? '16px' : '13px'};
    font-weight: 600;
    color: #000;
    margin-top: ${props => props.or && '20px'};
    margin-bottom: ${props => props.or && '20px'};
    text-align: center;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`
const SocialText = styled.span`
    margin: 10px;
    font-size:18px;
`

const Login = () => {
    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <LoginContainer>
                    <Title>Signup</Title>
                    <InputContainer>
                        <InputLabel>Email</InputLabel>
                        <InputWrapper>
                            <Input type='email' placeholder='Enter Your Email' />
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Password</InputLabel>
                        <InputWrapper>
                            <Input type='email' placeholder='Enter Your Password' />
                        </InputWrapper>
                    </InputContainer>
                    <Button>Login</Button>
                    <LoginText>Already have an account? <Link to='/login' replace={true} style={{ textDecoration: 'none', color: '##9b1fe9' }}>Login</Link></LoginText>
                    <LoginText or>Or</LoginText>
                    <SocialContainer>
                        <SocialText>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 488 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        </SocialText>
                        <SocialText>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                        </SocialText>
                        <SocialText>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </SocialText>
                    </SocialContainer>
                </LoginContainer>
            </LoginWrapper>

            <Footer />
        </Container>
    );
};

export default Login;