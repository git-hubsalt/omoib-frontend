import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Result,
  DateText,
  InfoBoldText,
  InfoNormalText,
  InfoLayout,
  InfoContainer,
  InfoWrapper,
  ButtonWrapper,
  Line,
  ReviewWrapper,
  TimeText,
} from './style';
import Header from '../../components/Header';
import ClickButton from '../../components/Button/ClickButton';
import { recommendationData, fittingData } from '../../data';

const HistoryDetailPage: React.FC = () => {
  //전체 데이터 받아오는 거(타이틀, 리뷰 등등)
  const [newData, setNewData] = useState<{
    id: number;
    date: string;
    Title: string;
    categories: { category: string; itemName: string }[];
    review?: string;
  } | null>(null);

  const navigate = useNavigate();
  // 쿼리 파라미터(스트링 키:값 ) 를 가져옴
  const searchParams = new URLSearchParams(window.location.search);
  const params = useParams();

  // 쿼리 파라미터에서 get 통해 특정 키인 id 값을 가져옴
  const id = parseInt(params.id || '1', 10); // 기본값 1
  // 쿼리 파라미터에서 get 통해 특정 키인 isVirtualFitting 값을 가져옴
  const isVirtualFittingParam = searchParams.get('isVirtualFitting');
  //데이터 선택
  const data = isVirtualFittingParam
    ? fittingData.find(item => item.id === id)
    : recommendationData.find(item => item.id === id);

  // useEffect(() => {
  //   async const fetchData = async () => {
  //     try {
  //       // 서버에서 데이터를 받아오는 코드 (API 호출)
  //       const response = isVirtualFittingParam
  //         ? await axios.get(`/api/fitting/${id}`) // fittingData API 호출
  //         : await axios.get(`/api/recommendation/${id}`); // recommendationData API 호출

  //       setNewData(response.data || null);
  //     } catch (error) {
  //       console.error('데이터를 가져오는데 실패했습니다:', error);
  //     }
  //   };

  //   fetchData();
  // }, [id, isVirtualFittingParam]);

  // if (!newData) {
  //   return <div>No data found</div>;
  // }

  // 데이터가 없을 때의 처리(에러 처리 안할 시 오류 발생) 나중에 api 연결시 삭제
  if (!data) {
    return <div>No data found</div>;
  }

  const renderCategories = () => {
    return data.categories.map((category, index) => (
      <InfoContainer key={index}>
        <InfoBoldText>{category.category}</InfoBoldText>
        <InfoNormalText>{category.itemName}</InfoNormalText>
      </InfoContainer>
    ));
  };

  const handleVirtualFittingClick = () => {
    navigate(`/virtual-fitting`);
  };

  //푸터 버튼 이벤트
  const handleClick = () => {
    navigate(`/review?id=${id}&isVirtualFitting=${isVirtualFittingParam}`);
  };

  return (
    <Container>
      <Header text="히스토리" />
      <Result />
      <InfoWrapper>
        <DateText>{data.Title}</DateText>
      </InfoWrapper>
      <InfoLayout>
        {renderCategories()}
        <Line />
      </InfoLayout>
      <ReviewWrapper>
        <InfoBoldText>리뷰</InfoBoldText>
        <InfoNormalText>
          {data.Review || '아직 리뷰를 남기지 않았어요!'}
        </InfoNormalText>
      </ReviewWrapper>
      <TimeText>{data.date}에 추천 받음</TimeText>
      <ButtonWrapper>
        <ClickButton
          variant="historyButton"
          onClick={handleVirtualFittingClick}
        >
          가상 피팅 하러 가기
        </ClickButton>
        <ClickButton variant="reviewButton" onClick={handleClick}>
          리뷰 기록하기
        </ClickButton>
      </ButtonWrapper>
    </Container>
  );
};

export default HistoryDetailPage;
