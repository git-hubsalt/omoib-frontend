import React, { useState, useEffect } from "react";
import {
  RegisterLayout,
  ContentsLayout, UploaderLayout
} from "./style";
import Header from "../../components/Header/index";
import Uploader from "../../components/Uploader/Uploader";
import {useNavigate, useParams} from "react-router-dom";
import ClickButton from "../../components/Button/ClickButton";
import Content from "../../components/Content";
import {ClothesBase, ClothesImage, ClothesInfo} from "../../types/type";
import {useMutation} from "@tanstack/react-query";
import {postWish} from "../../apis/wish";
import base64toFile from "../../utils/base64";
import {postCloset} from "../../apis/closet";

const seasons: string[] = ['봄', '여름', '가을', '겨울'];
const categories: string[] = ['상의', '하의', '아우터', '신발', '가방', '모자', '기타'];

const RegisterPage = () => {
  const params = useParams();
  const type = params.type === 'wish' ? '위시' : '옷장';
  const [contents, setContents] = useState<ClothesImage[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: ({ clothes, images }: { clothes: ClothesBase[]; images: File[] }) =>
      (type === '위시') ? postWish(clothes, images) : postCloset(clothes, images),
    onSuccess: ()=>{
      alert('등록 성공')
      navigate(type === '위시' ? '/wishlist' : '/closet'); // 위시일 때는 /wishlist, 옷장일 때는 /closet로 이동
    },
    onError: ()=>{
      alert('등록 실패')
    }
  })

  useEffect(() => {
    setItems([]);
  }, []);

  const handleInputChange = (index: number, field: 'name' | 'seasonTypes' | 'clothesType', value: any) => {
    setContents((prevContents) =>
      prevContents.map((content, i) => {
        if (i === index) {
          if (field === 'seasonTypes') {
            const updatedSeasons = content.seasonTypes.includes(value)
              ? content.seasonTypes.filter((season) => season !== value)
              : Array.from(new Set([...content.seasonTypes, value])); // 중복 제거 후 단일 배열 유지
            return { ...content, seasonTypes: updatedSeasons.flat() }; // .flat()으로 중첩 방지
          } else if (field === 'clothesType') {
            return { ...content, clothesType: value };
          }
          return { ...content, [field]: value };
        }
        return content;
      })
    );
  };




  const handleUploaderClick = (imageBase64: string) => {
    setItems((prevItems) => [...prevItems, imageBase64]);
    setContents((prev) => [
      ...prev,
      { id: prev.length, name: "", seasonTypes: [], clothesType: "상의", imageBase64 }
    ]);
  };

  const handleButtonClick = async () => {
    if (contents.every((content) => content.name)) {
      const images = contents.map((item, index) => base64toFile(item.imageBase64, `clothimage_${index}`))
      const clothes: ClothesBase[] = contents.map((item) => {
        return {
          name: item.name,
          clothesType: item.clothesType,
          seasonTypes: item.seasonTypes,
        } as ClothesBase
      });

      console.log(`name: ${clothes[0].name}`);
      console.log(`clothesType: ${clothes[0].clothesType}`);
      console.log(`seasonTypes: ${clothes[0].seasonTypes}`);

      register.mutate({ clothes: clothes, images: images });
    } else {
      alert("모든 제목을 입력해주세요.");
    }
  }


  const onCancel = (index: number) => {
    setItems((currentItems) => currentItems.filter((_, i) => i !== index));
    setContents((currentContents) => currentContents.filter((_, i) => i !== index));
    console.log(`onCancel ${index}`);
  };

  return (
    <RegisterLayout>
      <Header text={`${type}에 옷 등록하기`} />

      <UploaderLayout>
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
      </UploaderLayout>

      <ContentsLayout>
        {contents.map((content, index) => (
          <Content
            key={index}
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
