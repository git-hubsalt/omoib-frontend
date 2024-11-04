import styled from 'styled-components';

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: black;
`

export const ContentsBox = styled.div`
  height: 100vh;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 31px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
`

export const ClothesBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 23px;
`

export const KeywordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  gap: 31px;
`

export const TextAreaBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const KeywordTextArea = styled.textarea`
  height: 153px;
  padding: 24px 17px;
  font-size: 15px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
  border-radius: 10px;
  border: 1px solid #BCBEC0;
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
`

export const OutfitRecommendationsLayout = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
