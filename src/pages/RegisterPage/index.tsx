import {
  RegisterLayout,
  ContentsLayout
} from "./style";
import Header from "../../components/Header/index";
import Uploader from "../../components/Uploader/Uploader";
import { useParams } from "react-router-dom";
import { ChangeEvent, useState, useEffect } from "react";
import ClickButton from "../../components/Button/ClickButton";
import Content from "../../components/Content";
import { ClothesImage } from "../../types/type";

const seasons: string[] = ['봄', '여름', '가을', '겨울'];
const categories: string[] = ['상의', '하의', '아우터', '신발', '가방', '모자', '기타'];

const RegisterPage = () => {
  const params = useParams();
  const type = params.type === 'wish' ? '위시' : '옷장';
  const [contents, setContents] = useState<ClothesImage[]>([]);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems([]);
  }, []);

  const handleInputChange = (index: number, field: 'name' | 'seasonTypes' | 'clothesType', value: any) => {
    setContents((prevContents) =>
      prevContents.map((content, i) =>
        i === index
          ? {
            ...content,
            [field]: field === 'seasonTypes'
              ? content.seasonTypes.includes(value)
                ? content.seasonTypes.filter((season: string) => season !== value)
                : [...content.seasonTypes, value]
              : value,
          }
          : content
      )
    );
  };


  const handleUploaderClick = (imageBase64: string) => {
    setItems((prevItems) => [...prevItems, imageBase64]);
    setContents((prev) => [
      ...prev,
      { id: prev.length, name: "", seasonTypes: [], clothesType: "상의", imageBase64 }
    ]);
  };

  const handleButtonClick = () => {
    if (contents.some((content) => !content.name)) {
      alert("모든 제목을 입력해주세요.");
      return;
    }

    const requests = contents.map((content) => ({
      requestDTO: {
        name: content.name,
        seasonType: content.seasonTypes.join(', '), // 여러 계절을 문자열로 합침
        clothesType: content.clothesType
      },
      image: content.imageBase64
    }));

    console.log("백엔드에 보낼 데이터 형식:", requests);
    alert("콘솔에서 데이터를 확인하세요.");
  };

  const onCancel = (index: number) => {
    setItems((currentItems) => currentItems.filter((_, i) => i !== index));
    setContents((currentContents) => currentContents.filter((_, i) => i !== index));
    console.log(`onCancel ${index}`);
  };

  return (
    <RegisterLayout>
      <Header text={`${type}에 옷 등록하기`} />

      <Uploader
        type={'image'}
        maxCount={10}
        currentCount={items.length}
        onUpload={handleUploaderClick}
      >
        {items.length > 0
          ? items.map((item, index) => (
            <Uploader.Image
              key={index}
              index={index}
              image={item}
              onClick={() => console.log('업로더아이템 클릭')}
              onCancel={() => onCancel(index)}
            />
          ))
          : null}
      </Uploader>

      <ContentsLayout>
        {contents.map((content, index) => (
          <Content
            index={index}
            name={content.name}
            seasons={seasons}
            categories={categories}
            onInputChange={(e) => handleInputChange(index, 'name', e.target.value)}
            onSeasonChange={(selectedSeason) => handleInputChange(index, 'seasonTypes', selectedSeason)}
            onCategoryChange={(selectedCategory) => handleInputChange(index, 'clothesType', selectedCategory)}
          />
        ))}
      </ContentsLayout>

      <ClickButton variant={'footerButton'} onClick={handleButtonClick}>
        다 정했어요
      </ClickButton>
    </RegisterLayout>
  );
};

export default RegisterPage;