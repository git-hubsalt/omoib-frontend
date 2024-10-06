import {
  FittingTextBox,
  ImageUploaderBox,
  JoinLayout,
  NoticeText,
  InputTextBox,
  WelcomeTitle, ContentsBox
} from "./style";
import Uploader from "../../components/Uploader/Uploader";
import {ChangeEvent, useState} from "react";
import Input from "../../components/Input/Input";
import ClickButton from "../../components/Button/ClickButton";

const JoinPage = () => {
  const [nickname, setNickname] = useState<string>("");

  const handleBodyImageChange = (imageBase64: string) => {

  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const handleButtonClick = () => {

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
          <Uploader width={310} height={376}>
            <Uploader.Image
              hasButton={true}
              buttonText='신체 사진 등록하기'
              onImageChange={handleBodyImageChange} />
          </Uploader>
        </ImageUploaderBox>
      </ContentsBox>
      <ClickButton variant={'footerButton'} onClick={handleButtonClick}>
        회원 가입 완료
      </ClickButton>
    </JoinLayout>
  )
};

export default OnboardingPage;
