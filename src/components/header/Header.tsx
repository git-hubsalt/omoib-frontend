import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  text: string; // 가운데 텍스트를 전달하는 props
};

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackButton>◀</BackButton>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

// Header 전체 컨테이너
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;

  background-color: white;
`;

// 왼쪽 화살표 버튼
const BackButton = styled.div`
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