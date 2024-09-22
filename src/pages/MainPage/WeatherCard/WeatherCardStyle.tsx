// WeatherCardStyle.ts
import styled from 'styled-components';

interface WeatherContainerProps {
  backgroundColor: string;
}

export const WeatherContainer = styled.div<WeatherContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;;
    padding: 30px 20px;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    max-height : 300px;
    height: 100%;
    
`;

export const TemperatureBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const InfoBox : any = styled.div`
`;