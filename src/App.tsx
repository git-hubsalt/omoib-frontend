// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import logo from './assets/Logo.svg';
import kakao from './assets/Kakao.svg';

const LogoImage = styled.div`
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const KakaoImage = styled.div`
    margin-top: 350px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <LogoImage>
                <img src={logo} alt="logo"/>
            </LogoImage>

            <KakaoImage>
                <img src={kakao} alt="kakao"/>
            </KakaoImage>
        </>
    );
};

export default App;
