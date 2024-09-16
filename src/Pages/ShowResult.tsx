// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React from 'react';
import styled from 'styled-components';
import TagButton from '../components/Button/TagButton';
import Header from '../components/header/Header';
import ClickButton from '../components/Button/ClickButton';

interface RecommendationData {
  date: string;
  categories: {
      category: string;
      items: {
          name: string;
          tags: string[];
      }[];
  }[];

}

interface Props {
  recommendationData: RecommendationData;
  fittingData: RecommendationData;
  isVirtualFitting: boolean;
}

const ShowResult: React.FC<Props> = ({ recommendationData, fittingData, isVirtualFitting }) => {
  const data = isVirtualFitting ? fittingData : recommendationData;

  //데이터 받아오는 공통 함수 (상의, 하의, 기타)
  const renderCategory = (categoryName: string) => {
    const category = data.categories.find(category => category.category === categoryName);
    
    return (
      <InfoWrapper>
        <InfoBoldText>{categoryName}</InfoBoldText>
        {category?.items.map((item, index) => (
          <InfoWrapper key={index}>
            <InfoNormalText>{item.name}</InfoNormalText>
            {item.tags.map((tag, tagIndex) => (
              <TagButton key={tagIndex} name={tag} withHash={true} />
            ))}
          </InfoWrapper>
        ))}
      </InfoWrapper>
    );
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return (
    <div>
      <Header text={isVirtualFitting ? '가상 피팅 결과' : '코디 추천 결과'} />
      <Container>
        <Result />
        <DateText>
        {data.date}에 추천 받았어요.
        <InfoContainer>
          {renderCategory('상의')}
          {renderCategory('하의')}
          {renderCategory('기타')}
        </InfoContainer>
        </DateText>
      </Container>
      {!isVirtualFitting && (
      <ClickButton variant='footerButton' onClick={handleClick}>
        코디 추천 결과
      </ClickButton>
    )}
      {/* <ClickButton variant='footerButton' onClick={handleClick}>{isVirtualFitting ? '가상 피팅 결과' : '코디 추천 결과'}</ClickButton> */}
    </div>

  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 25px 25px 25px;
  font-family: Pretendard;
`;

const Result = styled.div`
  margin: 0px 0px 17px 0px;
  border-radius: 10px;
  height: 432px;
  background-color : var(--gray--2);
`;

const DateText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const InfoBoldText = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 20px;
`;

const InfoNormalText = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

const InfoContainer = styled.div` //정보 담은 컨테이너
  display:flex;
  margin-top: 24px;
  flex-direction: column;
  gap: 15px;
`;

const InfoWrapper = styled.div` //정보 한줄 씩
  display: flex;
  gap: 4px;
`;


export default ShowResult;
