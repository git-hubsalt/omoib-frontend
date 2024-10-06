// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React from 'react';
import * as S from "../styles/ShowResultStyles";
import Header from '../components/Header/Header';
import ClickButton from '../components/Button/ClickButton';
import { recommendationData, fittingData } from '../data';
import { InfoContainer } from '../styles/HistoryStyles';

//현재 태그 정보 데이터는 이전 페이지에서 props로 받고 있고, 리뷰결과는 바로 더미데이터 페이지에서 받아오고 있음. 뭐가 더 좋을까
const ShowResult: React.FC= () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = parseInt(searchParams.get('id') || '1', 10); // 기본값 1
  const isVirtualFittingParam = searchParams.get('isVirtualFitting'); 


  const data = isVirtualFittingParam
    ? fittingData.find(item => item.id === id)
    : recommendationData.find(item => item.id === id);

    // 데이터가 없을 때의 처리
    if (!data) {
      return <div>No data found</div>;
    }

    const renderCategories = () => {
      return data.categories.map((category, index) => (
        <S.InfoWrapper key={index}>
          <S.InfoBoldText>{category.category}</S.InfoBoldText>
          <S.InfoNormalText>{category.itemName}</S.InfoNormalText>
        </S.InfoWrapper>
      ))};

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <S.ShowResultBox>
      <Header text={isVirtualFittingParam ? '가상 피팅 결과' : '코디 추천 결과'} />
      <S.Result />
      <S.DateText>
        {data.Title}
      </S.DateText>
      <S.InfoContainer>
        {renderCategories()}
      </S.InfoContainer>
    {!isVirtualFittingParam && (
    <ClickButton variant='footerButton' onClick={handleClick}>
      코디 추천 결과
    </ClickButton>
    )}
    </S.ShowResultBox>

  );
};

export default ShowResult;
