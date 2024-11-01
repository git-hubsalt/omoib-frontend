import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 158px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ReviewBox = styled.textarea`
  display: flex;
  max-height: 343px;
  min-height: 300px;
  padding: 24px 17px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.5; /* placeholder의 줄 간격 */
    color: #888;
    white-space: pre-line; /* 줄바꿈 문자를 인식하게 설정 */
  }
`;
