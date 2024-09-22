import WeatherCard from '../MainPage/WeatherCard/WeatherCard';
import MainList from './MainList/MainList';
import { ReactComponent as Cloud } from '../../assets/weathers/cloud.svg'
import { ReactComponent as Sun } from '../../assets/weathers/sun.svg'
import styled from 'styled-components';
import { PageLayout, MainListWrapper } from './style';
import { ReactComponent as TshirtIcon } from '../../assets/main/t-shirt.svg'



export default function MainPage() {
  return (
    <PageLayout>
      <p>조다운 님 안녕하세요.</p>
      <WeatherCard
        temperature={28}
        weather="해가 쨍쨍"
        icon={Sun} // 아이콘 컴포넌트 자체를 전달
        description="맑음"
        highTemp={31}
        lowTemp={22}
      />
      <MainListWrapper>
        <MainList icon={<TshirtIcon />} text="코디 추천" />
        <MainList icon={<TshirtIcon />} text="가상 피팅" />
        <MainList icon={<TshirtIcon />} text="옷장" />
        <MainList icon={<TshirtIcon />} text="위시" />
        <MainList icon={<TshirtIcon />} text="히스토리" />
      </MainListWrapper>
    </PageLayout>
  )
}
