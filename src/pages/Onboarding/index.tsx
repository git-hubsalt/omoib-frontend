import React from 'react';
import logo from '../../assets/logo/logo.svg';
import kakao from '../../assets/logo/kakao.svg';
import * as style from './style';
import {useNavigate} from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleKakaoClick = () => {
    navigate('/join'); // "/join" 경로로 이동
  };

  return (
    <div>
      <style.LogoContainer>
        <div>
          <style.Highlight>오</style.Highlight>
          늘 <style.Highlight>모 입</style.Highlight>을래? <style.Highlight>오모입</style.Highlight>!
        </div>
        <style.StyledImage src={logo} alt="logo"/>
        <div>
          <style.Font>내 옷장에서</style.Font>
          <style.Font>AI가 추천해주는 코디 및 가상 피팅 서비스</style.Font>
        </div>
      </style.LogoContainer>
      <style.KakaoButtonContainer>
        <style.KakaoButton onClick={handleKakaoClick}>
          <style.KakaoLogo src={kakao} alt="kakao logo"/>
          <div>카카오로 시작하기</div>
        </style.KakaoButton>
      </style.KakaoButtonContainer>
    </div>
  );
};

export default Onboarding;
