import { FallbackLayout, ContentsBox, Title, CenterBox, ButtonBox } from './style';
import React from 'react';
import FallbackIcon from '../../assets/fallback.svg';
import BellIcon from '../../assets/bell.svg';
import Header from '../../components/Header/index';
import ClickButton from '../../components/Button/ClickButton';
import { useNavigate } from 'react-router-dom';

const FallbackPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const message = decodeURIComponent(searchParams.get('message') as string);
  const isNotification = decodeURIComponent(searchParams.get('isNotification') as string);
  const navigate = useNavigate();
  const icon = (isNotification !== 'null') ? BellIcon : FallbackIcon;

  return (
    <FallbackLayout>
      <Header text={''} />
      <CenterBox>
        <ContentsBox>
          <img src={icon} width={120} height={120} alt={'fallback_icon'} />
          <Title>{message}</Title>
        </ContentsBox>
        <ButtonBox>
          <ClickButton
            variant={'historyButton'}
            onClick={() => {
              navigate('/');
            }}
          >
            메인으로 가기
          </ClickButton>
        </ButtonBox>
      </CenterBox>
    </FallbackLayout>
  );
};

export default FallbackPage;
