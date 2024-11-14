import { ClothesInfo } from '../types/type';
import { privateAxiosInstance } from './axiosInstance';

export interface PostOutfitRecommendationProps {
  clothes: ClothesInfo[];
  filterTagList: string[];
}

export const postOutfitRecommendation =
  async ({
           clothes,
           filterTagList
  }: PostOutfitRecommendationProps) => {
  const requiredClothes =  clothes.map((item) => item.id);

  return privateAxiosInstance.post('/cody-recommendation/recommend', {
    requiredClothes,
    filterTagList,
  });
}
