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
  margin-bottom: 80%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const KeywordTextArea = styled.textarea`
  height: 153px;
  padding: 24px 17px;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
  border-radius: 10px;
  border: 1px solid #bcbec0;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
    color: var(--gray--5);
    white-space: pre-line;
    line-height: normal;
  }
`;
