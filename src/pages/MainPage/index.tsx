import WeatherCard from '../MainPage/WeatherCard/WeatherCard';
import MainList from './MainList/MainList';
import { ReactComponent as Cloud } from '../../assets/weathers/cloud.svg'
import { ReactComponent as Sun } from '../../assets/weathers/sun.svg'
import { PageLayout, MainListWrapper, ProfileBox, TextBox } from './style';
import { ReactComponent as TshirtIcon } from '../../assets/main/t-shirt.svg'
import { ReactComponent as BubbleIcon} from '../../assets/main/bubble.svg';
import { ReactComponent as ClosetIcon } from '../../assets/main/closet.svg';
import { ReactComponent as WishIcon } from '../../assets/main/heart.svg';
import { ReactComponent as HistoryIcon } from '../../assets/main/file-box.svg';


export default function MainPage() {
  return (
    <PageLayout>
      <ProfileBox>
        <p>조다운 님 안녕하세요.</p>
      </ProfileBox>
      <WeatherCard
        temperature={28}
        icon={Sun}
        description="맑음"
        highTemp={31}
        lowTemp={22}
      />
      <MainListWrapper>
        <MainList icon={<TshirtIcon />} text="코디 추천" />
        <MainList icon={<BubbleIcon />} text="가상 피팅" />
        <MainList icon={<ClosetIcon/>} text="옷장" />
        <MainList icon={<WishIcon />} text="위시" />
        <MainList icon={<HistoryIcon />} text="히스토리" />
      </MainListWrapper>

      <TextBox>
        <p>@DXW 컨퍼런스 Service Team 2</p>
      </TextBox>
    </PageLayout>
  )
}
