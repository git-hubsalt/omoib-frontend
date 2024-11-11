import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative; /* X 아이콘을 카드 내부에 절대 위치시키기 위해 설정 */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WishContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
`;

export const DeleteButton = styled.div`
  position: absolute; /* 부모(CardContainer)를 기준으로 위치 */
  background-color: black;
  border-radius: 80%;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
