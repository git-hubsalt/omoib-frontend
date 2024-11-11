import React from 'react';
import {
  NoticeContainer,
  BellIcon,
  NoticeTextContainer,
  MainText,
  SubText,
} from './style';
import {useNavigate} from "react-router-dom";

interface NoticeItemProps {
  timestamp: string;
  historyId: number;
}

export default function NoticeItem({ timestamp, historyId }: NoticeItemProps) {
  const navigate = useNavigate();
  return (
    <NoticeContainer onClick={() => navigate(`/history/${historyId}`)}>
      <BellIcon />
      <NoticeTextContainer>
        <MainText>{timestamp}에 시작한 코디 추천이 끝났습니다.</MainText>
        <SubText>지금 결과를 확인해보세요!</SubText>
      </NoticeTextContainer>
    </NoticeContainer>
  );
}
