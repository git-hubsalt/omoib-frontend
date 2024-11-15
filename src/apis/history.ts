import { privateAxiosInstance } from './axiosInstance';

export function getHistory(historyType: string) {
  return privateAxiosInstance.get(`/history`, {
    params: { historyType },
  });
}