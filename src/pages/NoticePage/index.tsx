import React from 'react';
import Header from '../../components/Header';
import NoticeItem from '../../components/NoticeItem';
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../apis/notification";
import { SpinnerWrapper } from '../SelectClothesPage/style';
import { ReactComponent as Spinner } from '../../assets/spin.svg';
import { TextWrapper } from './style';

interface NotificationInfo {
  timestamp: string;
  type: string;
  historyId: number;
}

export default function NoticePage() {
  const { isLoading, data } = useQuery({
    queryFn: getNotifications,
    queryKey: ['notification'],
  });

  const notifications = (data && data.data) ? data.data as NotificationInfo[] : [];

  return (
    <div>
      <Header text="알림" />
      {isLoading ? (
        <SpinnerWrapper><Spinner /></SpinnerWrapper>
      ) : notifications.length === 0 ? (
        <TextWrapper>
          알림이 없습니다.
        </TextWrapper>
      ) : (
        notifications.map((item, index) => (
          <NoticeItem
            key={index}
            timestamp={item.timestamp}
            historyId={item.historyId}
          />
        ))
      )}
    </div>
  );
}