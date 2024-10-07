import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Result = styled.div`
  margin: 20px 25px 25px 25px;
  border-radius: 10px;
  height: 432px; 
  background-color: var(--gray--2);
`;

export const DateText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const InfoBoldText = styled.div`
  font-size: 13px;
  font-weight: 600;
  width: 45px;
`;

export const InfoNormalText = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

export const InfoLayout = styled.div` //정보 담은 컨테이너
  display:flex;
  margin-top: 19px;
  flex-direction: column;
  gap: 15px;
  margin: 20px 25px 25px 25px;
`;

export const InfoContainer = styled.div` //태그 정보 한줄 씩
  display: flex;
  gap: 19px;
`;

export const InfoWrapper = styled.div` //태그 정보 한줄 씩
  display: flex;
  justify-content: space-between;
  margin: 0px 25px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 25px 25px 25px;
`;