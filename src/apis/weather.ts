import axios from 'axios';

export const fetchWeatherData = async (
  baseDate: string,    // yyyyMMdd 형식
  baseTime: string,    // HHMM 형식
  nx: string,          // 위치의 x 좌표
  ny: string           // 위치의 y 좌표
): Promise<any> => {   // 리턴 타입을 알맞게 지정하거나 'any'로 설정
  const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + process.env.REACT_APP_WEATHER_API_KEY;
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100');
  queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
  queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(baseDate);
  queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('1100');
  queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(nx);
  queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(ny);

  try {
    const response = await axios.get(url + queryParams);
    return response.data.response.body.items.item;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};