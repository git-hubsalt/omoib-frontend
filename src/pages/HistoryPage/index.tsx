import React, { useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { ClosetContainer } from './style';
import Tab from '../../components/Tab';
import { useQuery } from '@tanstack/react-query';
import { privateAxiosInstance } from '../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';

interface Clothes {
  id: number;
  name: string;
  clothesType: string;
  seasonType: string[];
  imagePath: string;
  clothesStorageType: string;
  createAt: string;
  updateAt: string;
}

interface HistoryData {
  historyId: number;
  type: 'RECOMMENDATION' | 'FITTING';
  clothesList: Clothes[];
  fittingImageURL: string;
  filterTagsString: string;
}

export default function HistoryPage() {
  const [selectedTab, setSelectedTab] = useState('코디 추천');
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery<HistoryData[]>({
    queryKey: ['history', selectedTab],
    queryFn: async () => {
      const type = selectedTab === '코디 추천' ? 'RECOMMENDATION' : 'FITTING';
      const { data } = await privateAxiosInstance.get('/history', {
        params: { historyType: type },
      });
      return data;
    },
  });

  const recommendationData = data?.filter(item => item.type === 'RECOMMENDATION') || [];
  const fittingData = data?.filter(item => item.type === 'FITTING') || [];
  const cardData = selectedTab === '코디 추천' ? recommendationData : fittingData;

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  // Card 클릭 시 상세 페이지로 이동
  const handleCardClick = (historyId: number) => {
    navigate(`/history/${historyId}`);
  };

  return (
    <div>
      <Header text="히스토리" />
      <div>
        <Tab tabs={['코디 추천', '가상 피팅']} onTabChange={handleTabChange} />
      </div>
      <ClosetContainer>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : isError ? (
          <p>오류가 발생했습니다: {error?.message}</p>
        ) : (
          cardData.map((item) => (
            <Card
              key={item.historyId}
              title={item.filterTagsString}
              date={item.clothesList[0]?.createAt.split('T')[0]}
              tags={item.clothesList[0]?.seasonType || []}
              imageSrc={item.fittingImageURL || item.clothesList[0]?.imagePath}
              onClick={() => handleCardClick(item.historyId)}  // 클릭 시 ID 전달
            />
          ))
        )}
      </ClosetContainer>
    </div>
  );
}