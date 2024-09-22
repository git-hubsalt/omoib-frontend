// WeatherCardStyle.ts
import styled from 'styled-components';

interface WeatherContainerProps {
  backgroundColor: string;
}

export const WeatherContainer = styled.div<WeatherContainerProps>`
    display: flex;
    align-items: center;
    flex-direction: column;;
    padding: 20px 0;
    text-align: center;
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
`;

export const TemperatureBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;