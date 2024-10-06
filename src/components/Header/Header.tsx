import React from 'react';
import { ReactComponent as Back } from '../../assets/back.svg';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackWrapper, HeaderText, DummyBox } from './HeaderStyle';

type HeaderProps = {
    text: string;
};

const Header = ({ text }: HeaderProps) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <HeaderContainer>
            <BackWrapper onClick={handleBackClick}>
                <Back />
            </BackWrapper>
            <HeaderText>{text}</HeaderText>
            <DummyBox></DummyBox>
        </HeaderContainer>
    );
};

export default Header;
