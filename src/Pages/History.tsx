import React, { useState } from 'react';
import * as H from "../styles/HistoryStyles";
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
      <H.InfoWrapper>
        <H.InfoBoldText>{categoryName}</H.InfoBoldText>
        {category?.items.map((item, index) => (
          <H.InfoWrapper key={index}>
            <H.InfoNormalText>{item.name}</H.InfoNormalText>
            {item.tags.map((tag, tagIndex) => (
              <TagButton key={tagIndex} name={tag} withHash={true} />
            ))}
          </H.InfoWrapper>
        ))}
      </H.InfoWrapper> 
    );
  };
  //푸터 버튼 이벤트
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Header text='히스토리' />
      <H.Container>
        <H.Result />
        <H.InfoWrapper>
          <H.DateText>
          {data.date}에 추천 받았어요.
          </H.DateText>
          <H.Delete onClick={() => onClickDelete(data.id)}>삭제</H.Delete>
        </H.InfoWrapper>
        <H.InfoContainer>
          {renderCategory('상의')}
          {renderCategory('하의')}
          {renderCategory('기타')}
        </H.InfoContainer>
        <H.ReviewWrapper>
          <H.InfoWrapper>
            <img src={ReviewData.temperature[0].emojiSrc} alt="추웠어요" />
            {ReviewData.temperature[0].label}
          </H.InfoWrapper>
          <H.InfoWrapper>
            <img src={ReviewData.likeability[0].emojiSrc} alt="별로예요" />
            {ReviewData.likeability[0].label}
          </H.InfoWrapper>
        </H.ReviewWrapper>
        <ClickButton variant='historyButton' onClick={handleClick}>
         완료
        </ClickButton>
        <ClickButton variant='reviewButton' onClick={handleClick}>
         리뷰 기록하기
        </ClickButton>
      </H.Container>
    </div>
  );
};

export default History;