import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as H from "./style";
import Header from '../../components/Header/Header';
import ClickButton from '../../components/Button/ClickButton';
import { recommendationData, fittingData } from '../../data';

const History: React.FC = () => { 
  // 쿼리 파라미터를 가져옴
  // const location = useLocation();
  const searchParams = new URLSearchParams(window.location.search);

  // 쿼리 파라미터에서 id와 isVirtualFitting 값을 가져옴
  const id = parseInt(searchParams.get('id') || '1', 10); // 기본값 1
  const isVirtualFittingParam = searchParams.get('isVirtualFitting'); 

  const data = isVirtualFittingParam
    ? fittingData.find(item => item.id === id)
    : recommendationData.find(item => item.id === id);

    // 데이터가 없을 때의 처리(에러 처리 안할 시 오류 발생)
    if (!data) {
      return <div>No data found</div>;
    }

    const renderCategories = () => {
      return data.categories.map((category, index) => (
        <H.InfoContainer key={index}>
          <H.InfoBoldText>{category.category}</H.InfoBoldText>
          <H.InfoNormalText>{category.itemName}</H.InfoNormalText>
        </H.InfoContainer>
      ))};

  //푸터 버튼 이벤트
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <H.Container>
      <Header text='히스토리' />
      <H.Result />
      <H.InfoWrapper>
        <H.DateText>
          {data.Title}
        </H.DateText> 
      </H.InfoWrapper>
      <H.InfoLayout>
        {renderCategories()}
      </H.InfoLayout>
      <H.ButtonWrapper>
        <ClickButton variant='historyButton' onClick={handleClick}>
          완료
        </ClickButton>
        <ClickButton variant='reviewButton' onClick={handleClick}>
          리뷰 기록하기
        </ClickButton>
      </H.ButtonWrapper>
    </H.Container>
  );
};

export default History;
