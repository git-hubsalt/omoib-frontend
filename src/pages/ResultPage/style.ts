import styled from "styled-components";

export const ShowResultBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const Result = styled.div`
  margin: 20px 25px 25px 25px;
  border-radius: 10px;
  height: 432px;
  background-color : var(--gray--2);
`;

export const DateText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0px 25px;
`;

export const InfoBoldText = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 20px;
  width: 45px;

`;

export const InfoNormalText = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

export const InfoContainer = styled.div` //정보 담은 컨테이너
  display:flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 25px 11px 25px;
`;

export const InfoWrapper = styled.div` //정보 한줄 씩
  display: flex;
  gap: 4px;
`;

export const Line = styled.div`
  background-color: #d9d9d9;
  height: 1px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0px 25px 15px 25px;
`;

export const WriteReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewButton = styled.div`
  font-size: 12px;
  cursor: pointer;
`;