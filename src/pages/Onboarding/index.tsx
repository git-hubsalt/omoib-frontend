import React from 'react';
import logo from '../../assets/logo/logo.svg';
import kakao from '../../assets/logo/kakao.svg';
import {LogoContainer, Highlight, Font, StyledImage,KakaoButtonContainer,KakaoButton,KakaoLogo} from './style';
import {useNavigate} from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleKakaoClick = () => {
    navigate('/join'); // "/join" 경로로 이동
  };

  return (
    <div>
      <LogoContainer>
        <div>
          <Highlight>오</Highlight>
          늘 <Highlight>모 입</Highlight>을래? <Highlight>오모입</Highlight>!
        </div>
        <StyledImage src={logo} alt="logo"/>
        <div>
          <Font>내 옷장에서</Font>
          <Font>AI가 추천해주는 코디 및 가상 피팅 서비스</Font>
        </div>
      </LogoContainer>
      <KakaoButtonContainer>
        <KakaoButton onClick={handleKakaoClick}>
          <KakaoLogo src={kakao} alt="kakao logo"/>
          <div>카카오로 시작하기</div>
        </KakaoButton>
      </KakaoButtonContainer>
    </div>
  );
};

export default Onboarding;
