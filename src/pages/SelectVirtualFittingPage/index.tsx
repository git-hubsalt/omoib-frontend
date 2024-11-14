import React, { useState } from 'react';
import { PageContainer, HeaderWrapper, ButtonGroup, InstructionText, CardContainer, FooterButtonContainer, SpinnerWrapper } from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';
import { useQuery } from '@tanstack/react-query';
import { getCloset } from '../../apis/closet';
import { getHistory } from '../../apis/history';
import { ReactComponent as Spinner } from '../../assets/spin.svg';

interface CardData {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
}

interface HistoryCardData {
  historyId: number;
  type: string;
  clothesList: {
    id: number;
    name: string;
    clothesType: string;
    seasonType: string[];
    imagePath: string;
  }[];
  fittingImageURL: string | null;
  filterTagsString: string;
}

export default function SelectVirtualFittingPage() {
  const [mode, setMode] = useState<'옷장' | '히스토리'>('옷장');

  const { isLoading: isClosetLoading, data: closetData } = useQuery({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  const { isLoading: isHistoryLoading, data: historyData } = useQuery({
    queryFn: () => getHistory(mode === '히스토리' ? 'RECOMMENDATION' : 'FITTING'),
    queryKey: ['history', mode],
    enabled: mode === '히스토리',
  });


  const wardrobeData: CardData[] = (closetData && closetData.clothes) ? closetData.clothes : [];
  const fetchedHistoryData: HistoryCardData[] = historyData?.data ?? [];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleModeChange = (newMode: '옷장' | '히스토리') => {
    setMode(newMode);
    setSelectedIndex(null);
  };

  const cardData = mode === '옷장'
    ? wardrobeData
    : fetchedHistoryData.flatMap(history => history.clothesList);

  const isLoading = mode === '옷장' ? isClosetLoading : isHistoryLoading;

  return (
    <PageContainer>
      <Header text="아이템 선택" />
      <HeaderWrapper>
        <p>아이템을 어디서 가져오시겠어요?</p>
        <ButtonGroup>
          <SelectButton
            label="옷장"
            isSelected={mode === '옷장'}
            onClick={() => handleModeChange('옷장')}
          />
          <SelectButton
            label="히스토리"
            isSelected={mode === '히스토리'}
            onClick={() => handleModeChange('히스토리')}
          />
        </ButtonGroup>
        <InstructionText>
          코디 추천을 원하는 아이템을 2가지 선택해 주세요.
        </InstructionText>
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
            cardData.map((item, index) => {
              const date = 'createDate' in item ? item.createDate : '정보 없음';
              const tags = 'seasonType' in item ? item.seasonType : [];
              const imageSrc = 'imagePath' in item ? item.imagePath : item.imageUrl;

              return (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  date={date}
                  tags={tags}
                  imageSrc={imageSrc}
                  isSelected={selectedIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              );
            })
          )}
        </CardContainer>
      )}
      <FooterButtonContainer>
        <ClickButton variant="footerButton">다 정했어요</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}