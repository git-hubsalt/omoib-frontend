import styled from 'styled-components';

export const ClosetContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    align-items: center;


    & > * {

        width: 100%;
        max-width: 393px;
    }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;  // Spinner가 화면의 중앙에 위치하도록 전체 뷰 높이를 사용
`;