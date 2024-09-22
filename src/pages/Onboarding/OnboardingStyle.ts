import styled from 'styled-components';

export const LogoContainer = styled.div`
  margin-top: 100px;
  margin-left: 26px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: #7B7B7B; /* 기본 글씨 색상 */
`;

export const Highlight = styled.span`
  color: #89CEFA; /* 강조할 글자 색상 */
`;

export const Font = styled.div`
  color: #7B7B7B;
  font-size: 14px;
  font-weight: medium;
`;

export const StyledImage = styled.img`
  width: 120px;
  height: auto;
`;

export const KakaoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 400px;
`;

export const KakaoButton = styled.button`
  width: 345px;
  height: 56px;
  border-radius: 14px;
  border: none;
  background-color: #FFDD00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  position: relative; /* 상대적 위치 설정 */
`;

export const KakaoLogo = styled.img`
  position: absolute; /* 절대적 위치 설정 */
  left: 25px; /* 버튼 왼쪽에 로고 고정 */
  width: 25px; /* 로고 크기 조정 */
  height: auto;
`;
