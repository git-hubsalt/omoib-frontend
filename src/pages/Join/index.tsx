import {
  FittingTextBox,
  ImageUploaderBox,
  JoinLayout,
  NoticeText,
  InputTextBox,
  WelcomeTitle, ContentsBox, FooterBox
} from "./style";
import {ChangeEvent, useState} from "react";
import Input from "../../components/Input/Input";
import ClickButton from "../../components/Button/ClickButton";
import {useNavigate} from 'react-router-dom';
import BodyImageUploader from '../../components/Uploader/BodyImageUploader'; // useNavigate 추가

const JoinPage = () => {
  const [nickname, setNickname] = useState<string>("");

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleBodyImageChange = (image: File) => {
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleButtonClick = () => {
    navigate('/'); // 회원가입 완료 시 메인 페이지로 이동
  };

  return (
    <JoinLayout>
      <ContentsBox>
        <InputTextBox>
          <WelcomeTitle>오모입에 오신 걸 환영합니다!</WelcomeTitle>
          <NoticeText>이름을 입력해 주세요</NoticeText>
          <Input
            value={nickname}
            placeholder='예) 홍길동'
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
  )
};

export default JoinPage;
