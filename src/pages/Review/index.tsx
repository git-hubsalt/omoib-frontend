import React, { useState } from 'react';
import axios from 'axios';
import * as R from './style';
import Header from '../../components/Header/Header';
import ClickButton from '../../components/Button/ClickButton';
import { recommendationData, fittingData } from '../../data';

const Review: React.FC = () => {
  const [review, setReview] = useState('');
  const searchParams = new URLSearchParams(window.location.search);
  const id = parseInt(searchParams.get('id') || '1', 10);
  const isVirtualFittingParam = searchParams.get('isVirtualFitting');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // 엔드포인트 변경할 것
      const response = await axios.post('/api/review', {
        id: id,
        isVirtualFittingParam: isVirtualFittingParam,
        review: review,
      });

      console.log('리뷰가 성공적으로 저장되었습니다!', response.data);
    } catch (error) {
      console.error('리뷰 저장에 실패했어요 :(', error);
    }
  };
  return (
    <R.Container>
      <R.TopContainer>
        <Header text="리뷰 작성" />
        <R.InnerContainer>
          <R.ReviewWrapper>
            <R.Title>리뷰를 남겨주세요!</R.Title>
            <R.ReviewBox
              placeholder={`오늘 온도는 어땠나요?\n전체적인 코디는 어땠나요?\n마음에 들었나요?\n\n나중에 볼 수 있게 리뷰를 작성해주세요.`}
              value={review}
              onChange={handleChange}
            />
          </R.ReviewWrapper>
          <ClickButton variant="historyButton" onClick={handleSubmit}>
            작성 완료하기
          </ClickButton>
        </R.InnerContainer>
      </R.TopContainer>
    </R.Container>
  );
};

export default Review;