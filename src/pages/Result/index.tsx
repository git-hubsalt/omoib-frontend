// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {ShowResultBox, Result, DateText, InfoBoldText, InfoNormalText, InfoContainer, InfoWrapper, Line, ReviewWrapper, WriteReviewBox, ReviewButton} from './style';
import Header from '../../components/Header/Header';
import ClickButton from '../../components/Button/ClickButton';
import { recommendationData, fittingData } from '../../data'

const ShowResult: React.FC= () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = parseInt(searchParams.get('id') || '1', 10); // 기본값 1 , 십진수로 받아올 것
  const isVirtualFittingParam = searchParams.get('isVirtualFitting'); //isVirtualFitting 값 가져오기
  const navigate = useNavigate();

  const data = isVirtualFittingParam
    ? fittingData.find(item => item.id === id)
    : recommendationData.find(item => item.id === id);

    // 데이터가 없을 때의 처리
  if (!data) {
    return <div>No data found</div>;
  }

  const handleClickButton = () => {
    navigate(`/review?id=${id}&isVirtualFitting=${isVirtualFittingParam}`);
  };

  const renderCategories = () => {
    return data.categories.map((category, index) => (
      <InfoWrapper key={index}>
        <InfoBoldText>{category.category}</InfoBoldText>
        <InfoNormalText>{category.itemName}</InfoNormalText>
      </InfoWrapper>
    ))};

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <ShowResultBox>
      <Header text={isVirtualFittingParam ? '가상 피팅 결과' : '코디 추천 결과'} />
      <Result />
      <DateText>
        {data.Title}
      </DateText>
      <InfoContainer>
        {renderCategories()}
        <Line />
      </InfoContainer>
      <ReviewWrapper>
        <WriteReviewBox>
          <InfoBoldText>리뷰</InfoBoldText>
          {!data.Review && (
            <ReviewButton onClick={handleClickButton}>리뷰 남기러 가기{'>'}</ReviewButton>
          )}
        </WriteReviewBox>
        <InfoNormalText>
          {data.Review || '아직 리뷰를 남기지 않았어요!'}
        </InfoNormalText>
      </ReviewWrapper>
    {!isVirtualFittingParam && (
    <ClickButton variant='footerButton' onClick={handleClick}>
      가상 피팅 하러 가기
    </ClickButton>
    )}
    </ShowResultBox>
  );
};

export default ShowResult;
