import React from 'react';
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

const Container = styled.div`
    margin: 20px 0px;
`

const ReCaptcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <Container>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
            />
        </Container>
    );
};

export default ReCaptcha;