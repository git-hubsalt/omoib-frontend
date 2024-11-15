import styled from "styled-components";

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 14px 20px;
  box-sizing: border-box;
  gap: 20px;
  border-bottom: 1px solid #D9D9D9;
`

export const TagSelectionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`

export const TagBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap
`

export const NoticeText = styled.p`
  font-size: 14px;
  font-weight: 500;
  align-self: start;
`
export const Input = styled.input`
  width: 365px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #D1D3D8;
  border-radius: 5px ;
`