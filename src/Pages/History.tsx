// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React, { useState } from 'react';
import styled from 'styled-components';
import TagButton from '../components/Button/TagButton';
import Header from '../components/header/Header';
import ClickButton from '../components/Button/ClickButton';
import { ReviewData } from '../data';

interface recommendationData {  
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
  recommendationData: recommendationData[];
  onClickDelete: (id: number) => void;
  currentId: number;
}

const History: React.FC<Props> = ({ recommendationData, onClickDelete, currentId }) => {
  // const [currentId, setCurrentId] = useState(recommendationData[0]?.id || -1);

  //data=현재 Id / currentId는 현재 선택된 아이디를 나타낸 것
  const data = recommendationData.find(item => item.id === currentId);

    // 데이터가 없을 때의 처리(에러 처리 안할 시 오류 발생)
    if (!data) {
      return <div>No data found</div>;
    } 


  //데이터 받아오는 공통 함수 (상의, 하의, 기타)
  const renderCategory = (categoryName: string) => {
    const category = data?.categories.find(category => category.category === categoryName);
    console.log("category", category)
    console.log(data)

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
  //푸터 버튼 이벤트
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Header text='히스토리' />
      <Container>
        <Result />
        <InfoWrapper>
          <DateText>
          {data.date}에 추천 받았어요.
          </DateText>
          <Delete onClick={() => onClickDelete(data.id)}>삭제</Delete>
        </InfoWrapper>
        <InfoContainer>
          {renderCategory('상의')}
          {renderCategory('하의')}
          {renderCategory('기타')}
        </InfoContainer>
        <ReviewWrapper>
          <InfoWrapper>
            <img src={ReviewData.temperature[0].emojiSrc} alt="추웠어요" />
            {ReviewData.temperature[0].label}
          </InfoWrapper>
          <InfoWrapper>
            <img src={ReviewData.likeability[0].emojiSrc} alt="별로예요" />
            {ReviewData.likeability[0].label}
          </InfoWrapper>
        </ReviewWrapper>
        <ClickButton variant='historyButton' onClick={handleClick}>
         완료
        </ClickButton>
        <ClickButton variant='reviewButton' onClick={handleClick}>
         리뷰 기록하기
        </ClickButton>
      </Container>
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

const InfoWrapper = styled.div` //태그 정보 한줄 씩
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Delete = styled.div`
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  margin-left: 65px;
  cursor: pointer;
`;

const ReviewWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 28px 0px;
`;

export default History;