import React, { useState } from 'react';
import {
  KeywordTextArea,
  Title,
  ReviewWrapper,
  InnerContainer,
  TopContainer,
  Container,
} from './style';
import Header from '../../components/Header';
import ClickButton from '../../components/Button/ClickButton';
import { useMutation } from '@tanstack/react-query';
import { putReview, PutReviewProps } from '../../apis/review';
import { useNavigate } from 'react-router-dom';

const Review: React.FC = () => {
  const [review, setReview] = useState('');
  const searchParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const id = parseInt(searchParams.get('id') || '1', 10);
  // const isVirtualFittingParam = searchParams.get('isVirtualFitting');
  const writeReview = useMutation({
    mutationFn: ({ historyId, text }: PutReviewProps) =>
      putReview({ historyId, text }),
    onSuccess: () => {
      navigate(-1);
    },
    onError: error => {
      console.error(error);
      navigate(`/fallback?message=${error.message}&isNotification=false`);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(`id: ${id}`);
    writeReview.mutate({ historyId: id, text: review });
  };

  return (
    <Container>
      <TopContainer>
        <Header text="리뷰 작성" />
        <InnerContainer>
          <ReviewWrapper>
            <Title>리뷰를 남겨주세요!</Title>
            <KeywordTextArea
              placeholder={
                '오늘 온도는 어땠나요?\n' +
                '전체적인 코디는 어땠나요?\n' +
                '마음에 들었나요?\n\n' +
                '나중에 볼 수 있게 한 줄 평을 자세히 작성해주세요.'
              }
              onChange={handleChange}
            />
          </ReviewWrapper>
          <ClickButton variant="historyButton" onClick={handleSubmit}>
            작성 완료하기
          </ClickButton>
        </InnerContainer>
      </TopContainer>
    </Container>
  );
};

export default Review;
