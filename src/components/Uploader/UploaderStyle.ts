import styled from 'styled-components';

interface CountTextProps {
  $color: string;
}

export const UploaderLayout = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 4px;
  overflow-x: auto;
`

export const UploaderBox = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #D1D3D8;
`

export const CountText = styled.p<CountTextProps>`
  color: ${({ $color }) => $color};
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`

export const CountTextBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
`

export const UploaderContainer = styled.div`
  width: 73px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  flex-shrink: 0;
`

export const CancelIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(+20%);
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100%;
`;

