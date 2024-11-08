import {privateAxiosInstance} from "./axiosInstance";

export interface PutReviewProps {
    historyId: number;
    text: string;
}

export const putReview = (request: PutReviewProps) => {
    return privateAxiosInstance.put('/review/update', request);
}
