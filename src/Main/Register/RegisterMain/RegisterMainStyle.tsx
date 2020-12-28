import React from 'react';
import styled from 'styled-components';
import landingBackground from '../../../Images/images/images/landingBackground.png';


export const Container = styled.div`
    height:100vh;
    background-size: 100% 100%;
    background-image: url(${landingBackground});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const Wrapper = styled.div`
    background-color:#d0b8a782;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 35%;
    height: 58%;
    padding: 5rem;
    position: relative;
`;
