import React, { useState, useEffect } from 'react';
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
import { privateAxiosInstance } from '../../apis/axiosInstance';
import { ReactComponent as Spinner } from '../../assets/spin.svg'


interface Category {
  category: string;
  itemName: string;
}

interface Review {
  text: string;
}

interface NewData {
  id: number;
  date: string;
  Title: string;
  categories: Category[];
  review?: string | Review;
}

const HistoryDetailPage: React.FC = () => {
  const [newData, setNewData] = useState<NewData | null>(null); // newData의 타입을 NewData로 설정

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // URL에서 ID를 받음

  useEffect(() => {
    if (id) {
      privateAxiosInstance
        .get(`/history/${id}`)
        .then((response) => {
          setNewData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError('데이터를 가져오는데 실패했습니다.');
          console.error('데이터를 가져오는데 실패했습니다:', err);
          setLoading(false);
        });
    } else {
      setError('ID가 제공되지 않았습니다.');
      setLoading(false);
    }
  }, [id]); // id가 변경되었을 때만 실행

  if (loading) {
    return <div><Spinner/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!newData) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const renderCategories = () => {
    if (!newData.categories || newData.categories.length === 0) {
      return <p>카테고리가 없습니다.</p>;
    }

    return newData.categories.map((category, index) => (
      <InfoContainer key={index}>
        <InfoBoldText>{category.category}</InfoBoldText>
        <InfoNormalText>{category.itemName}</InfoNormalText>
      </InfoContainer>
    ));
  };

  // 가상 피팅 버튼 클릭 시 이동
  const handleVirtualFittingClick = () => {
    navigate(`/virtual-fitting`);
  };

  // 리뷰 페이지로 이동
  const handleClick = () => {
    navigate(`/review?id=${id}`);
  };

  return (
    <Container>
      <Header text="히스토리" />
      <Result />
      <InfoWrapper>
        <DateText>{newData.Title}</DateText>
      </InfoWrapper>
      <InfoLayout>
        {renderCategories()}
        <Line />
      </InfoLayout>
      <ReviewWrapper>
        <InfoBoldText>리뷰</InfoBoldText>
        <InfoNormalText>
          {typeof newData.review === 'string' ? newData.review : newData.review?.text || '아직 리뷰를 남기지 않았어요!'}
        </InfoNormalText>
      </ReviewWrapper>
      <TimeText>{newData.date}에 추천 받음</TimeText>
      <ButtonWrapper>
        <ClickButton
          variant="historyButton"
          onClick={handleVirtualFittingClick}
        >
          가상 피팅 하러 가기
        </ClickButton>
        <ClickButton variant="reviewButton" onClick={handleClick}>
          {newData.review ? '리뷰 수정하기' : '리뷰 기록하기'}
        </ClickButton>
      </ButtonWrapper>
    </Container>
  );
};

export default HistoryDetailPage;