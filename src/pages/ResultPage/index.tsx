// 코디 추천 결과랑 가상피팅 결과를 조건문 써서 2개 렌더링하기
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ShowResultBox, Result, DateText, InfoBoldText, InfoNormalText, InfoContainer, InfoWrapper, Line, ReviewWrapper, WriteReviewBox, ReviewButton} from './style';
import Header from '../../components/Header';
import ClickButton from '../../components/Button/ClickButton';
import {privateAxiosInstance} from "../../apis/axiosInstance";
import { ReactComponent as Spinner } from '../../assets/spin.svg'

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

const ShowResult: React.FC= () => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = parseInt(searchParams.get('id') || '1', 10); // 기본값 1 , 십진수로 받아올 것//isVirtualFitting 값 가져오기
  const navigate = useNavigate();
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVirtualFitting, setIsVirtualFitting] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      privateAxiosInstance
        .get(`/history/${id}`)
        .then((response) => {
          if (response.data) {
            setData(response.data);
            setLoading(false);

            if (response.data.history.type) {
              const type = response.data.history.type;
              setIsVirtualFitting((type === 'FITTING'));
            }
          }
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

  const handleClickButton = () => {
    navigate(`/review?id=${id}&isVirtualFitting=${isVirtualFitting}`);
  };

  const handleClick = () => {
    // console.log('Button clicked!');
    navigate(`/virtual-fitting/select}`);
  };

  return (
    <ShowResultBox>
      <Header text={isVirtualFitting ? '가상 피팅 결과' : '코디 추천 결과'} />
      <Result>
        <img src={data.history.fittingImageURL || data.history.clothesList[0]?.imagePath} width={432} alt="result"
        />
      </Result>
      <InfoWrapper>
        <DateText>{data.history.filterTagsString}</DateText>
      </InfoWrapper>
      <InfoContainer>
        {renderCategories()}
        <Line />
      </InfoContainer>
      <ReviewWrapper>
        <WriteReviewBox>
          <InfoBoldText>리뷰</InfoBoldText>
          {(!data.review || (data.review.text === '')) && (
            <ReviewButton onClick={handleClickButton}>리뷰 남기러 가기{'>'}</ReviewButton>
          )}
        </WriteReviewBox>
        <InfoNormalText>
          {(data.review && data.review.text !== '') ? data.review.text : '아직 리뷰를 남기지 않았어요!'}
        </InfoNormalText>
      </ReviewWrapper>
    {!isVirtualFitting && (
    <ClickButton variant='footerButton' onClick={handleClick}>
      가상 피팅 하러 가기
    </ClickButton>
    )}
    </ShowResultBox>
  );
};

export default ShowResult;
