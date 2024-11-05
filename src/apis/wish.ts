import { privateFormDataAxiosInstance } from './axiosInstance';

export const deleteWish = async (Id: number) => {
  return await privateFormDataAxiosInstance.delete(`/wish/${Id}`);
};
