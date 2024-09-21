import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back  } from '../../assets/back.svg'

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackWrapper><Back/></BackWrapper>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;

  background-color: white;
`;

// 왼쪽 화살표 버튼
const BackWrapper = styled.div`
  position: absolute;
  left: 16px;
  font-size: 18px;
  cursor: pointer;
`;

// 중앙 텍스트
const HeaderText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default Header;