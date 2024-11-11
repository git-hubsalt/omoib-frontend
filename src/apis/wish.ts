import { privateFormDataAxiosInstance } from './axiosInstance';
import {ClothesBase} from "../types/type";

export const deleteWish = async (Id: number) => {
  return await privateFormDataAxiosInstance.delete(`/wish/${Id}`);
};


export const postWish = (clothes: ClothesBase, images: File[]) => {
  const formData = new FormData();
  const requestBody = { clothes: clothes };

  formData.append(
    'requestDTO',
    new Blob([JSON.stringify(requestBody)], { type: 'application/json' }),
  )

  images.forEach(image => {
    if (image.size > 0) {
      formData.append('image', image);
    }
  });

  return privateFormDataAxiosInstance.post('/wish', formData);
}