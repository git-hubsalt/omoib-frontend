import { privateAxiosInstance } from './axiosInstance';

// ClothesInfo 타입 정의
interface ClothesInfo {
  id: number;
  name: string;
  clothesType: '하의' | '상의' | '신발' | '가방' | '모자' | '아우터' | '기타';
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  imageUrl: string;
}

// 서버 응답 타입 정의 (예시로 작성)
interface SendClothesInfoResponse {
  success: boolean;
  message: string;
  data: any; // 실제 데이터 형식에 맞게 정의
}

export const sendClothesInfo = async (clothesInfo: ClothesInfo[]): Promise<SendClothesInfoResponse> => {
  try {
    if (clothesInfo.length !== 2) {
      throw new Error('You must select two clothes');
    }
    // clothesInfo 객체를 요청 형식에 맞게 변환
    const upperClothesId = clothesInfo[0].id;
    const lowerClothesId = clothesInfo[1].id;

    const response = await privateAxiosInstance.post('/virtual-fitting/fitting', {
      // 변환된 clothes 배열을 전송
      upperClothesId,
      lowerClothesId
    });

    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("Error sending clothes info:", error);
    throw error;
  }
};