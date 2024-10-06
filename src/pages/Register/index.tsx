import {ContentsContainer, NoticeText, RegisterLayout, TagBox, TagSelectionBox} from "./style";
import Header from "../../components/Header/Header";
import Uploader from "../../components/Uploader/Uploader";
import {useParams} from "react-router-dom";
import Input from "../../components/Input/Input";
import {ChangeEvent, useState} from "react";
import TagButton from "../../components/Button/TagButton";
import Tab from "../../components/Tab/Tab";
import ClickButton from "../../components/Button/ClickButton";

const seasons: string[] = ['봄', '여름', '가을', '겨울'];
const categories: string[] = ['상의', '하의', '기타'];

const RegisterPage = () => {
  const params = useParams();
  const type = (params.type === 'wish') ? '위시' : '옷장';
  const [name, setName] = useState<string>('');

  const handleClothesImageChange = () => {

  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {

  };

  return (
    <RegisterLayout>
      <Header text={`${type}에 옷 등록하기`}/>
      <ContentsContainer>
        <Uploader width={310} height={305}>
          <Uploader.Image
            hasButton={false}
            onImageChange={handleClothesImageChange}/>
        </Uploader>
        <Input onChange={handleInputChange} value={name} placeholder={'예) 빨간 후드티'}/>
        <TagSelectionBox>
          <NoticeText>계절을 골라주세요</NoticeText>
          <TagBox>
            {seasons.map((season: string, index: number) => {
              return <TagButton key={index} name={season} withHash={false}/>
            })}
          </TagBox>
        </TagSelectionBox>
        <TagSelectionBox>
          <NoticeText>태그를 추가해주세요</NoticeText>
          <TagBox>
            {categories.map((category: string, index: number) => {
              return <TagButton key={index} name={category} withHash={false}/>
            })}
          </TagBox>
        </TagSelectionBox>
      </ContentsContainer>
      <ClickButton variant={'footerButton'} onClick={handleButtonClick}>
        다 정했어요
      </ClickButton>
    </RegisterLayout>
  )
};

export default RegisterPage;
