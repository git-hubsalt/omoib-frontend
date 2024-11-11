import { privateFormDataAxiosInstance } from './axiosInstance';

export const deleteWish = async (Id: number) => {
  const apiUri = process.env.REACT_APP_API_KEY;
  return await privateFormDataAxiosInstance.delete(`{apiUri}/wish/${Id}`);
};
