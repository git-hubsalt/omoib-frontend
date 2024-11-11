import React, { useState, useEffect } from "react";
import {
  RegisterLayout,
  ContentsLayout, UploaderLayout
} from "./style";
import Header from "../../components/Header/index";
import Uploader from "../../components/Uploader/Uploader";
import { useParams } from "react-router-dom";
import ClickButton from "../../components/Button/ClickButton";
import Content from "../../components/Content";
import {ClothesBase, ClothesImage} from "../../types/type";
import axios from 'axios';
import useAuthStore from "../../stores/authStore";
import {useMutation} from "@tanstack/react-query";
import {postWish} from "../../apis/wish";
import base64toFile from "../../utils/base64";

const seasons: string[] = ['봄', '여름', '가을', '겨울'];
const categories: string[] = ['상의', '하의', '아우터', '신발', '가방', '모자', '기타'];

const RegisterPage = () => {
  const params = useParams();
  const type = params.type === 'wish' ? '위시' : '옷장';
  const [contents, setContents] = useState<ClothesImage[]>([]);
  const [items, setItems] = useState<string[]>([]);

  const register = useMutation({
    mutationFn: ({ clothes, images }: { clothes: ClothesBase[]; images: File[] }) => postWish(clothes, images),
    onSuccess: ()=>{
      alert('등록 성공')
    },
    onError: ()=>{
      alert('등록 실패')
    }
  })

  // 테스트용으로 받은 토큰을 하드코딩
  //const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDk1OTkzMywiZXhwIjoxNzMyNzU5OTMzfQ.563h32qveX9duf9vJseX49SuWFNMs35RRtBeqswdhhg';

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
              : [...content.seasonTypes, value];
            return { ...content, seasonTypes: updatedSeasons };
          } else if (field === 'clothesType') {
            return { ...content, clothesType: value };
          }
          return { ...content, [field]: value };
        } else if (field === 'clothesType') {
          return { ...content, clothesType: '' };
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
    if (contents.some((content) => !content.name)) {
      const images = contents.map((item, index) => base64toFile(item.imageBase64, `clothimage_${index}`))
      const clothes = contents.map((item) => {
        return {
          name: item.name,
          clothesType: item.clothesType,
          seasonTypes: item.seasonTypes,
        } as ClothesBase
      });

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
