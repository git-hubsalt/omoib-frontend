import React from 'react';
import Header from '../../components/Header';
import NoticeItem from '../../components/NoticeItem'
import {useQuery} from "@tanstack/react-query";
import {getNotifications} from "../../apis/notification";

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

  console.log("data: " + (typeof notifications));

  return (
    <div>
      <Header text="알림"/>
      {(!isLoading) &&
        notifications.map((item, index) => (
          <NoticeItem
            key={index}
            timestamp={item.timestamp}
            historyId={item.historyId}
          />
        ))
      }
    </div>
  );
}
