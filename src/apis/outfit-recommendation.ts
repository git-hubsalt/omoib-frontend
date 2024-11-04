import { ClothesInfo } from '../types/type';
import { privateAxiosInstance } from './axiosInstance';

export interface PostOutfitRecommendationProps {
  requiredClothes: ClothesInfo[];
  filterTagList: string[];
}

export const postOutfitRecommendation =
  async ({
           requiredClothes,
           filterTagList
  }: PostOutfitRecommendationProps) => {
  const requiredClothesIdList =  requiredClothes.map((clothes) => clothes.id);

  return privateAxiosInstance.post('/cody-recommendation/recommend', {
    requiredClothesIdList,
    filterTagList,
  });
}
