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
import { ReactComponent as Spinner } from '../../assets/spin.svg';

interface Clothes {
  id: number;
  name: string;
  clothesType: string;
  seasonType: string[];
  imagePath: string;
  clothesStorageType: string;
  createAt: string;
  updateAt: string;
}

interface History {
  historyId: number;
  type: 'RECOMMENDATION' | 'FITTING';
  clothesList: Clothes[];
  fittingImageURL: string | null;
  filterTagsString: string;
}

interface Review {
  text: string;
}

interface ApiData {
  history: History;
  review?: Review;
}

const HistoryDetailPage: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      privateAxiosInstance
        .get(`/history/${id}`)
        .then((response) => {
          setData(response.data);
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
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const renderCategories = () => {
    if (!data.history.clothesList || data.history.clothesList.length === 0) {
      return <p>카테고리가 없습니다.</p>;
    }

    return data.history.clothesList.map((clothes, index) => (
      <InfoContainer key={index}>
        <InfoBoldText>{clothes.clothesType}</InfoBoldText>
        <InfoNormalText>{clothes.name}</InfoNormalText>
      </InfoContainer>
    ));
  };

  const handleVirtualFittingClick = () => {
    navigate(`/virtual-fitting/select`);
  };

  const handleClick = () => {
    navigate(`/review?id=${id}`);
  };

  return (
    <Container>
      <Header text="히스토리" />
      <Result>
        <img src={data.history.fittingImageURL || data.history.clothesList[0]?.imagePath} width={432} alt="result"
        />
      </Result>
      <InfoWrapper>
        <DateText>{data.history.filterTagsString}</DateText>
      </InfoWrapper>
      <InfoLayout>
        {renderCategories()}
        <Line />
      </InfoLayout>
      <ReviewWrapper>
        <InfoBoldText>리뷰</InfoBoldText>
        <InfoNormalText>
          {data.review ? data.review.text : '아직 리뷰를 남기지 않았어요!'}
        </InfoNormalText>
      </ReviewWrapper>
      <TimeText>{data.history.clothesList[0]?.createAt.split('T')[0]}에 추천 받음</TimeText>
      <ButtonWrapper>
        <ClickButton variant="historyButton" onClick={handleVirtualFittingClick}>
          가상 피팅 하러 가기
        </ClickButton>
        <ClickButton variant="reviewButton" onClick={handleClick}>
          {data.review ? '리뷰 수정하기' : '리뷰 기록하기'}
        </ClickButton>
      </ButtonWrapper>
    </Container>
  );
};

export default HistoryDetailPage;