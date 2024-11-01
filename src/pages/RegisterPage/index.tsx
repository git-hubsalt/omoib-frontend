import { ContentsContainer, NoticeText, RegisterLayout, TagBox, TagSelectionBox, Input, UploaderBox } from "./style";
import Header from "../../components/Header/Header";
import Uploader from "../../components/Uploader/Uploader";
import { useParams } from "react-router-dom";
import { ChangeEvent, useState, useEffect } from "react";
import TagButton from "../../components/Button/TagButton";
import ClickButton from "../../components/Button/ClickButton";

const seasons: string[] = ['봄', '여름', '가을', '겨울'];
const categories: string[] = ['상의', '하의', '한벌옷', '신발', '가방', '모자', '기타', '기타'];

const RegisterPage = () => {
  const params = useParams();
  const type = (params.type === 'wish') ? '위시' : '옷장';
  const [name, setName] = useState<string>('');
  const [contents, setContents] = useState<number[]>([0]); // ContentsContainer 개수를 관리하는 상태


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUploaderClick = () => {
    setContents((prev) => [...prev, prev.length]); // 새로운 ContentsContainer 추가
  };

  const handleButtonClick = () => {
    if (!name) {
      alert("제목을 입력해주세요.");
      return;
    }
    console.log("Registering clothing item:", { name });
  };

  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems([
      "test",
      "test1",
      "test2",
      "test3",
      "test4",
    ]);
  }, []);

  const onCancel = (index: number) => {
    setItems((currentItems) => currentItems.filter((item, i) => index !== i));
    console.log(`onCancel ${index}`);
  }

  return (
    <RegisterLayout>
      <Header text={`${type}에 옷 등록하기`} />

        <Uploader
          type={'image'}
          maxCount={10}
          currentCount={items.length}
          onUpload={handleUploaderClick}
        >
          {(items.length > 0) ?
            items.map((item, index) => (
              //각각의 항목들을 표시
              <Uploader.Image
                key={index}
                index={index}
                image={item}
                onClick={() => { console.log('업로더아이템 클릭') }}
                onCancel={onCancel}
              />
            )) :
            null
          }
        </Uploader>

      {contents.map((_, index) => (
        <ContentsContainer key={index}>
          <TagSelectionBox>
            <NoticeText>제목을 입력해주세요 - {index + 1} </NoticeText>
            <Input onChange={handleInputChange} value={name} />
          </TagSelectionBox>

          <TagSelectionBox>
            <NoticeText>계절을 골라주세요</NoticeText>
            <TagBox>
              {seasons.map((season, index) => (
                <TagButton key={index} name={season} withHash={false} />
              ))}
            </TagBox>
          </TagSelectionBox>

          <TagSelectionBox>
            <NoticeText>태그를 추가해주세요</NoticeText>
            <TagBox>
              {categories.map((category, index) => (
                <TagButton key={index} name={category} withHash={false} />
              ))}
            </TagBox>
          </TagSelectionBox>
        </ContentsContainer>
      ))}

      <ClickButton variant={'footerButton'} onClick={handleButtonClick}>
        다 정했어요
      </ClickButton>
    </RegisterLayout>
  );
};

export default RegisterPage;