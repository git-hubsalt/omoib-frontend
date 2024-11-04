import React from 'react';
import { WeatherContainer, TemperatureBox, InfoBox } from './style';
import { ReactComponent as Cloud } from '../../../assets/weathers/cloud.svg';
import { ReactComponent as Sun } from '../../../assets/weathers/sun.svg';
import { ReactComponent as CloudRain } from '../../../assets/weathers/cloud-with-rain.svg';
import { ReactComponent as Wind } from '../../../assets/weathers/leaf-in-wind.svg';
import { ReactComponent as Snow } from '../../../assets/weathers/snowman.svg';

interface WeatherCardProps {
  temperature: number;
  icon: React.ElementType; // 컴포넌트 타입으로 받음
  description: string;
  highTemp: number;
  lowTemp: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
                                                   temperature,

                                                   icon: IconComponent, // 아이콘을 컴포넌트로 받음
                                                   description,
                                                   highTemp,
                                                   lowTemp,
                                                 }) => {

  const getBackgroundColor = () => {
    if (IconComponent === Sun) return '#ECE4C5'; // 해가 쨍쨍
    if (IconComponent === Wind) return '#DAE2D2'; // 바람
    if (IconComponent === Snow) return '#d0eafc'; // 눈
    if (IconComponent === CloudRain) return '#b3d1f3'; // 비
    if (IconComponent === Cloud) return '#DDE4EA'; // 흐림
    return '#ffffff'; // 기본 배경색
  };

  return (
    <WeatherContainer $backgroundColor={getBackgroundColor()}>
      <InfoBox>
        <div style={{ fontSize: '40px' }}>
          <IconComponent />
        </div>
        <TemperatureBox>
          {temperature} ℃
        </TemperatureBox>
        <div>{description}</div>
        <div>최고 {highTemp}℃ 최저 {lowTemp}℃</div>
      </InfoBox>
    </WeatherContainer>
  );
};

export default WeatherCard;
