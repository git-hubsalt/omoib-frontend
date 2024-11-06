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
  queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(baseTime); // 사용자가 제공한 baseTime 사용
  queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(nx);
  queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(ny);

  try {
    const response = await axios.get(url + queryParams);  // URL과 queryParams를 함께 사용

    // 응답 구조 확인
    console.log('Weather API Response:', response.data);

    // `items` 존재 여부 확인
    if (response.data && response.data.response && response.data.response.body && response.data.response.body.items) {
      return response.data.response.body.items.item;
    } else {
      console.warn('No items found in the weather API response');
      return []; // items가 없을 경우 빈 배열 반환
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
