import styled from 'styled-components';
import landingBackground from '../../Images/images/images/landingBackground.png';

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
`;

export const Text = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const Text1 = styled.p`
    font-size: 10px;
    font-weight: 400;
`;

export const Input = styled.input`
    border: none;
    border-radius: 2px;
`;

export const InputLabel = styled.label`
    font-size: 8px;
    font-weight: 300;
    color: gray;
`;

export const Small = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    font-size:10px;
    font-size: 8px;
    font-weight: 300;
    color: gray;
    margin-top: 30px;
`;
