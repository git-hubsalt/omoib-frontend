import {
  FittingTextBox,
  ImageUploaderBox,
  JoinLayout,
  NoticeText,
  InputTextBox,
  WelcomeTitle, ContentsBox, FooterBox
} from "./style";
import React, {ChangeEvent, useState} from "react";
import Input from "../../components/Input/index";
import ClickButton from "../../components/Button/ClickButton";
import {useNavigate} from 'react-router-dom';
import BodyImageUploader from '../../components/Uploader/BodyImageUploader';
import { useMutation } from '@tanstack/react-query';
import { postSignup } from '../../apis/signup'; // useNavigate 추가

const SignupPage = () => {
  const [nickname, setNickname] = useState<string>('');
  const [bodyImage, setBodyImage] = useState<File | null>(null);
  const signup = useMutation({
    mutationFn: ({ username, image }: { username: string; image: File }) => postSignup(username, image),
    onSuccess: () => {
      navigate('/');
      //임시 알림 메시지
      alert('오모입에 오신 걸 환영해요!')
    },
    onError: () => {
      alert('회원가입 중 오류가 발생했어요...');
    }
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleBodyImageChange = (image: File) => {
    setBodyImage(image);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleButtonClick = () => {
    if (bodyImage) {
      signup.mutate({ username: nickname, image: bodyImage });
    }
  };

  return (
    <JoinLayout>
      <ContentsBox>
        <InputTextBox>
          <WelcomeTitle>오모입에 오신 걸 환영합니다!</WelcomeTitle>
          <NoticeText>이름을 입력해 주세요</NoticeText>
          <Input
            value={nickname}
            placeholder="예) 홍길동"
            onChange={handleInputChange}
          />
        </InputTextBox>
        <ImageUploaderBox>
          <FittingTextBox>
            <NoticeText>가상 피팅을 위한</NoticeText>
            <NoticeText>신체 사진을 등록해주세요.</NoticeText>
          </FittingTextBox>
          <BodyImageUploader
            width={345}
            height={376}
            buttonText={'신체 사진 등록하기'}
            onImageChange={handleBodyImageChange}
          />
        </ImageUploaderBox>
      </ContentsBox>
      <FooterBox>
        <ClickButton variant={'footerButton'} onClick={handleButtonClick}>
          회원 가입 완료
        </ClickButton>
      </FooterBox>
    </JoinLayout>
  );
};

export default SignupPage;
