import React from 'react';
import {
  NoticeContainer,
  BellIcon,
  NoticeTextContainer,
  MainText,
  SubText,
} from './NoticeStyle';

export default function Notice() {
  return (
    <NoticeContainer>
      <BellIcon />
      <NoticeTextContainer>
        <MainText>17:30 에 시작한 코디 추천이 끝났습니다.</MainText>
        <SubText>지금 결과를 확인해보세요!</SubText>
      </NoticeTextContainer>
    </NoticeContainer>
  );
}