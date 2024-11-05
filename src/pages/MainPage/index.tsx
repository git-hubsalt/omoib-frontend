import React from 'react';
import WeatherCard from '../MainPage/WeatherCard/WeatherCard';
import MainList from './MainList/MainList';
import { ReactComponent as Cloud } from '../../assets/weathers/cloud.svg';
import { ReactComponent as Sun } from '../../assets/weathers/sun.svg';
import { PageLayout, MainListWrapper, ProfileBox, TextBox, HeaderBox, NoticeWrapper, ProfileIconWrapper } from './style';
import { ReactComponent as TshirtIcon } from '../../assets/main/t-shirt.svg';
import { ReactComponent as BubbleIcon } from '../../assets/main/bubble.svg';
import { ReactComponent as ClosetIcon } from '../../assets/main/closet.svg';
import { ReactComponent as WishIcon } from '../../assets/main/heart.svg';
import { ReactComponent as HistoryIcon } from '../../assets/main/file-box.svg';
import { ReactComponent as Notice } from '../../assets/main/bell.svg';
import { ReactComponent as ProfileIcon } from '../../assets/profile-small.svg';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate(); // useNavigate 사용

  const handleNoticeClick = () => {
    navigate('/notice'); // /notice 경로로 이동
  };

  const handleMyPageClick = () => {
    navigate('/my-page'); // /notice 경로로 이동
  };


  return (
    <PageLayout>
      <HeaderBox>
      <ProfileBox>
        <ProfileIconWrapper>
          <ProfileIcon onClick={handleMyPageClick}/>
        </ProfileIconWrapper>
        <p>조다운 님 안녕하세요.</p>
      </ProfileBox>
        <NoticeWrapper>
          <Notice onClick={handleNoticeClick} /> {/* Notice 클릭 이벤트 추가 */}
        </NoticeWrapper>

      </HeaderBox>
      <WeatherCard/>
      <MainListWrapper>
        <MainList icon={<TshirtIcon/>} text="코디 추천" route="/outfit-recommendations"/>
        <MainList icon={<BubbleIcon/>} text="가상 피팅" route="/virtual-fitting"/>
        <MainList icon={<ClosetIcon/>} text="옷장" route="/closet"/>
        <MainList icon={<WishIcon/>} text="위시" route="/wish"/>
        <MainList icon={<HistoryIcon/>} text="히스토리" route="/history"/>
      </MainListWrapper>

      <TextBox>
        <p>@DXW 컨퍼런스 Service Team 2</p>
      </TextBox>
    </PageLayout>
  );
}

