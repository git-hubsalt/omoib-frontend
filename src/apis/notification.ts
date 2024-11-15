import {privateAxiosInstance} from "./axiosInstance";

export const getNotifications = async () => {
  return privateAxiosInstance.get('/notification')
}
