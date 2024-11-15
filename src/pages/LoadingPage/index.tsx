import React, { useEffect, useState } from 'react';
import SpinnerImage from '../../assets/spin.svg';
import {
  SpinnerWrapper,
  SpinnerContainer,
  PhraseContainer,
  HighlightText,
} from './style';

const phrases = [
  '인공지능이 일하고 있어요!',
  '오모입에서 열심히 알아보고 있어요',
  '우리를 너무 믿진 마세요...',
  '사용자 데이터를 불러오는 중이에요',
  '서버와 통신 중이에요',
  '옷장을 정리하고 있어요!',
];

const LoadingPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const renderColoredPhrase = () => {
    switch (currentPhrase) {
      case '인공지능이 일하고 있어요!':
        return (
          <span>
            <HighlightText>인공지능</HighlightText>이 일하고 있어요!
          </span>
        );
      case '오모입에서 열심히 알아보고 있어요':
        return (
          <span>
            <HighlightText>오모입</HighlightText>에서 <br />
            열심히 알아보고 있어요
          </span>
        );
      case '사용자 데이터를 불러오는 중이에요':
        return (
          <span>
            <HighlightText>사용자 데이터</HighlightText>를 불러오는 중이에요
          </span>
        );
      case '서버와 통신 중이에요':
        return (
          <span>
            서버와 <HighlightText>통신 중</HighlightText>이에요
          </span>
        );
      case '옷장을 정리하고 있어요!':
        return (
          <span>
            <HighlightText>옷장을</HighlightText> 정리하고 있어요!
          </span>
        );
      default:
        return <span>{currentPhrase}</span>;
    }
  };

  return (
    <SpinnerWrapper>
      <SpinnerContainer>
        <SpinnerImage />
      </SpinnerContainer>
      <PhraseContainer>
        <p>{renderColoredPhrase()}</p>
      </PhraseContainer>
    </SpinnerWrapper>
  );
};

export default LoadingPage;
