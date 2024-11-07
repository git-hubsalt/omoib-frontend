import React, { useEffect, useState } from 'react';
import { WeatherContainer, InfoBox, Description } from './style';
import { ReactComponent as Cloud } from '../../assets/weathers/cloud.svg';
import { ReactComponent as Sun } from '../../assets/weathers/sun.svg';
import { ReactComponent as CloudRain } from '../../assets/weathers/cloud-with-rain.svg';
import { ReactComponent as Wind } from '../../assets/weathers/leaf-in-wind.svg';
import { ReactComponent as Snow } from '../../assets/weathers/snowman.svg';
import { fetchWeatherData } from '../../apis/weather';

interface WeatherData {
  category: string;
  fcstValue: string;
  baseTime: string;
}

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [icon, setIcon] = useState<React.ReactElement | null>(null);

  const getBackgroundColor = (category: string) => {
    if (category === 'SKY' && weatherData[0]?.fcstValue === '1') return '#ECE4C5'; // 맑음
    if (category === 'PTY' && weatherData[0]?.fcstValue === '1') return '#b3d1f3'; // 비
    if (category === 'PTY' && weatherData[0]?.fcstValue === '3') return '#d0eafc'; // 눈
    return '#DDE4EA'; // 기본 흐림
  };

  const selectIcon = (skyValue: string, ptyValue: string) => {
    if (ptyValue === '1') {
      return <CloudRain />;
    } else if (ptyValue === '2' || ptyValue === '3') {
      return <Snow />;
    } else {
      switch (skyValue) {
        case '1':
        case '2':
          return <Sun />;
        case '3':
        case '4':
          return <Cloud />;
        default:
          return <Wind/>;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const now = new Date();
      now.setHours(now.getHours() - 1); // 한 시간을 뺍니다.
      const baseDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // yyyyMMdd 형식

      let baseTime: string;
      if (now.getMinutes() < 30) {
        baseTime = now.getHours().toString().padStart(2, '0') + '30';
      } else {
        const nextHour = (now.getHours() + 1) % 24;
        baseTime = nextHour.toString().padStart(2, '0') + '00';
      }
      const nx = '37'; // 예시 위치의 x 좌표
      const ny = '126'; // 예시 위치의 y 좌표

      try {
        const data = await fetchWeatherData(baseDate, baseTime, nx, ny);

        // 중복 카테고리를 제거하고 첫 번째 항목만 남깁니다.
        const filteredData = data
          .filter((item: WeatherData) => ['T1H', 'SKY', 'PTY', 'RN1'].includes(item.category))
          .reduce((acc: WeatherData[], current: WeatherData) => {
            if (!acc.some((item) => item.category === current.category)) {
              acc.push({
                category: current.category,
                fcstValue: current.fcstValue,
                baseTime,
              });
            }
            return acc;
          }, []);

        setWeatherData(filteredData);

        // `SKY` 카테고리의 아이콘을 선택
        // `SKY`와 `PTY` 카테고리의 아이콘을 선택
        const skyData = filteredData.find((item: WeatherData) => item.category === 'SKY');
        const ptyData = filteredData.find((item: WeatherData) => item.category === 'PTY');
        if (skyData && ptyData) {
          const iconElement = selectIcon(skyData.fcstValue, ptyData.fcstValue);
          if (iconElement) {
            setIcon(iconElement);
          }
        }
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchData();
  }, []);

  // 필요한 데이터 추출
  const temperature = weatherData.find((item) => item.category === 'T1H')?.fcstValue || 'N/A';
  const precipitation = weatherData.find((item) => item.category === 'RN1')?.fcstValue || 'N/A';

  return (
    <WeatherContainer $backgroundColor={getBackgroundColor(weatherData[0]?.category)}>
      <InfoBox>
        {icon && <div style={{ fontSize: '40px' }}>{icon}</div>}
        <Description>
          <p>온도: {temperature}°C</p>
          <p>강수량: {precipitation}</p>
        </Description>
      </InfoBox>
    </WeatherContainer>
  );
};

export default WeatherCard;