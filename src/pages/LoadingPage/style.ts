import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  padding-top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  align-self: center;
`;

export const PhraseContainer = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`;

export const HighlightText = styled.span`
  font-weight: bold;
  color: #1c1c1c; /* 메인 색상 */
`;