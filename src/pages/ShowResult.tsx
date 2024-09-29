// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React from 'react';
import * as S from "../styles/ShowResultStyles";
import TagButton from '../components/Button/TagButton';
import Header from '../components/Header/Header';
import ClickButton from '../components/Button/ClickButton';

interface RecommendationData {
  id: number;
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
  recommendationData: RecommendationData[];
  fittingData: RecommendationData[];
  isVirtualFitting: boolean;
  currentId: number;
}

//현재 태그 정보 데이터는 이전 페이지에서 props로 받고 있고, 리뷰결과는 바로 더미데이터 페이지에서 받아오고 있음. 뭐가 더 좋을까
const ShowResult: React.FC<Props> = ({ recommendationData, fittingData, isVirtualFitting, currentId }) => {
  const data = isVirtualFitting ? fittingData : recommendationData;

  const Id = data.find(item => item.id === currentId);

    // 데이터가 없을 때의 처리
    if (!Id) {
      return <div>No data found</div>;
    }

  //데이터 받아오는 공통 함수 (상의, 하의, 기타)
  const renderCategory = (categoryName: string) => {
    const category = Id?.categories.find(category => category.category === categoryName);

    return (
      <S.InfoWrapper>
        <S.InfoBoldText>{categoryName}</S.InfoBoldText>
        {category?.items.map((item, index) => (
          <S.InfoWrapper key={index}>
            <S.InfoNormalText>{item.name}</S.InfoNormalText>
            {item.tags.map((tag, tagIndex) => (
              <TagButton key={tagIndex} name={tag} withHash={true} />
            ))}
          </S.InfoWrapper>
        ))}
      </S.InfoWrapper>
    );
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <S.ShowResultBox>
      <Header text={isVirtualFitting ? '가상 피팅 결과' : '코디 추천 결과'} />
      <S.Container>
        <S.Result />
        <S.DateText>
        {Id.date}에 추천 받았어요.
        </S.DateText>
        <S.InfoContainer>
          {renderCategory('상의')}
          {renderCategory('하의')}
          {renderCategory('기타')}
        </S.InfoContainer>
      </S.Container>
      {!isVirtualFitting && (
      <ClickButton variant='footerButton' onClick={handleClick}>
        코디 추천 결과
      </ClickButton>
    )}
    </S.ShowResultBox>

  );
};

export default ShowResult;
