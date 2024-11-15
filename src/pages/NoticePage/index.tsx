import React from 'react';
import Header from '../../components/Header';
import NoticeItem from '../../components/NoticeItem';
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from 'axios';
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
  const { isLoading, data } = useQuery<AxiosResponse<NotificationInfo[]>, Error>({
    queryFn: getNotifications,
    queryKey: ['notification'],
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 최신 상태로 유지
    cacheTime: 1000 * 60 * 10, // 10분 동안 캐시에 데이터 보관
  } as UseQueryOptions<AxiosResponse<NotificationInfo[]>, Error>);

  const notifications = data?.data || [];

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