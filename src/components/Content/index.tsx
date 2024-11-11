import React, { ChangeEvent } from "react";
import {
  ContentsContainer,
  NoticeText,
  TagBox,
  TagSelectionBox,
  Input,
} from "./style";
import TagButton from "../../components/Button/TagButton";

type Props = {
  index: number;
  name: string;
  seasons: string[];
  categories: string[];
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSeasonChange: (selectedSeasons: string[]) => void;
  onCategoryChange: (selectedCategory: string) => void;
};

const Contents: React.FC<Props> = ({
                                     index,
                                     name,
                                     seasons,
                                     categories,
                                     onInputChange,
                                     onSeasonChange,
                                     onCategoryChange,
                                   }) => {

  const handleSeasonClick = (season: string) => {
    onSeasonChange([season]); // 선택한 계절을 배열로 전달
  };

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category); // 선택한 카테고리를 전달
  };

  return (
    <ContentsContainer>
      <TagSelectionBox>
        <NoticeText>제목을 입력해주세요 - {index + 1}</NoticeText>
        <Input onChange={onInputChange} value={name} />
      </TagSelectionBox>

      <TagSelectionBox>
        <NoticeText>계절을 골라주세요</NoticeText>
        <TagBox>
          {seasons.map((season, idx) => (
            <TagButton
              key={idx}
              name={season}
              withHash={false}
              onClick={() => handleSeasonClick(season)} // 클릭 이벤트 추가
            />
          ))}
        </TagBox>
      </TagSelectionBox>

      <TagSelectionBox>
        <NoticeText>태그를 추가해주세요</NoticeText>
        <TagBox>
          {categories.map((category, idx) => (
            <TagButton
              key={idx}
              name={category}
              withHash={false}
              onClick={() => handleCategoryClick(category)} // 클릭 이벤트 추가
            />
          ))}
        </TagBox>
      </TagSelectionBox>
    </ContentsContainer>
  );
};

export default Contents;