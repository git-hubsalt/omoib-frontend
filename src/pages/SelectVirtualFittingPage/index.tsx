import React, { useState } from 'react';
import {
  PageContainer,
  HeaderWrapper,
  ButtonGroup,
  InstructionText,
  CardContainer,
  FooterButtonContainer,
  SpinnerWrapper,
} from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';
import { useQuery } from '@tanstack/react-query';
import { getCloset } from '../../apis/closet';
import { getHistory } from '../../apis/history';
import { ReactComponent as Spinner } from '../../assets/spin.svg';
import { useNavigate } from 'react-router-dom';
import useVirtualFittingStore from '../../stores/virtualFittingStore';
import { sendClothesInfo } from '../../apis/virtual-fitting';

interface ClothesInfo {
  id: number;
  name: string;
  clothesType: '하의' | '상의' | '신발' | '가방' | '모자' | '아우터' | '기타';
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  imageUrl: string;
}

interface CardData {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
  seasonTypes: ('봄' | '가을' | '여름' | '겨울')[];
  clothesType: '하의' | '상의' | '신발' | '가방' | '모자' | '아우터' | '기타';
}

interface HistoryCardData {
  historyId: number;
  type: string;
  clothesList: ClothesInfo[];
  fittingImageURL: string | null;
  filterTagsString: string;
}

const parseTagList = (tagList: string[]): { seasonTypes: CardData['seasonTypes']; clothesType: CardData['clothesType'] | null } => {
  const seasonTypes = tagList.filter(tag => ['봄', '여름', '가을', '겨울'].includes(tag)) as CardData['seasonTypes'];
  const clothesType = tagList.find(tag => ['하의', '상의', '신발', '가방', '모자', '아우터', '기타'].includes(tag)) as CardData['clothesType'] | null;
  return { seasonTypes, clothesType };
};

export default function SelectVirtualFittingPage() {
  const [mode, setMode] = useState<'옷장' | '히스토리'>('옷장');
  const navigate = useNavigate();
  const { selectedClothes, addClothesToVirtualFitting } = useVirtualFittingStore();
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  const { isLoading: isClosetLoading, data: closetData } = useQuery({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  const { isLoading: isHistoryLoading, data: historyData } = useQuery({
    queryFn: () => getHistory(mode === '히스토리' ? 'RECOMMENDATION' : 'FITTING'),
    queryKey: ['history', mode],
    enabled: mode === '히스토리',
  });

  const wardrobeData: CardData[] = closetData?.clothes.map((item: any) => {
    const { seasonTypes, clothesType } = parseTagList(item.tagList);
    return {
      ...item,
      seasonTypes,
      clothesType: clothesType || '기타',
    };
  }) || [];

  const fetchedHistoryData: HistoryCardData[] = historyData?.data ?? [];
  const cardData = mode === '옷장' ? wardrobeData : fetchedHistoryData.flatMap(history => history.clothesList);
  const isLoading = mode === '옷장' ? isClosetLoading : isHistoryLoading;

  const handleCardClick = (index: number) => {
    setSelectedIndex(prevIndex => prevIndex.includes(index) ? prevIndex.filter(item => item !== index) : [...prevIndex, index]);

    const selectedItem = cardData[index];
    if (selectedItem) {
      const clothesData = {
        id: selectedItem.id,
        name: selectedItem.name,
        clothesType: selectedItem.clothesType,
        seasonTypes: selectedItem.seasonTypes,
        imageUrl: selectedItem.imageUrl,
      };
      addClothesToVirtualFitting(clothesData);
    }
  };

  const handleModeChange = (newMode: '옷장' | '히스토리') => {
    setMode(newMode);
    setSelectedIndex([]);
  };

  const handleFinishSelection = async () => {
    if (selectedClothes.length > 0) {
      const upperClothes = selectedClothes.find(item => item.clothesType === '상의');
      const lowerClothes = selectedClothes.find(item => item.clothesType === '하의');

      if (upperClothes && lowerClothes) {
        const clothesInfo = [upperClothes, lowerClothes];
        try {
          await sendClothesInfo(clothesInfo);
          // navigate('/recommendations/outfits');
        } catch (error) {
          console.error('옷 정보 전송 실패', error);
        }
      } else {
        alert('상의와 하의 아이템을 모두 선택해야 합니다.');
      }
    }
  };

  return (
    <PageContainer>
      <Header text="아이템 선택" />
      <HeaderWrapper>
        <p>아이템을 어디서 가져오시겠어요?</p>
        <ButtonGroup>
          <SelectButton label="추천코디" isSelected={mode === '히스토리'} onClick={() => handleModeChange('히스토리')} />
          <SelectButton label="직접선택" isSelected={mode === '옷장'} onClick={() => handleModeChange('옷장')} />
        </ButtonGroup>
        <InstructionText>코디 추천을 원하는 아이템을 2가지 선택해 주세요.</InstructionText>
      </HeaderWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <CardContainer>
          {cardData.length === 0 ? (
            <p>데이터가 없습니다.</p>
          ) : (
            cardData.map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.name}
                date={'createDate' in item ? (item.createDate as string) : '정보 없음'}
                tags={[
                  ...(item.seasonTypes || []), // seasonTypes 배열 추가
                  item.clothesType || '기타'   // clothesType 추가
                ]}
                imageSrc={'imageUrl' in item ? item.imageUrl : ''}
                isSelected={selectedIndex.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            ))
          )}
        </CardContainer>
      )}
      <FooterButtonContainer>
        <ClickButton variant="footerButton" onClick={handleFinishSelection}>다 정했어요!</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}