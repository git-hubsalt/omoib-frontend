import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 25px 25px 25px;
  font-family: Pretendard;
`;

export const Result = styled.div`
  margin: 0px 0px 17px 0px;
  border-radius: 10px;
  height: 432px;
  background-color : var(--gray--2);
`;

export const DateText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const InfoBoldText = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 20px;
`;

export const InfoNormalText = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

export const InfoContainer = styled.div` //정보 담은 컨테이너
  display:flex;
  margin-top: 24px;
  flex-direction: column;
  gap: 15px;
`;

export const InfoWrapper = styled.div` //정보 한줄 씩
  display: flex;
  gap: 4px;
`;

export const ShowResultBox = styled.div`
  display: flex;
  flex-direction: column;
`;