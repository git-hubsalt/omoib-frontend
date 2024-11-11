export interface ClothesBase {
  name: string;
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  clothesType: '상의' | '하의' | '신발' | '가방' | '모자' | '아우터' | '기타';
}

export interface ClothesInfo extends ClothesBase {
  id: number;
  imageUrl: string;
}

export interface ClothesImage extends ClothesBase {
  imageBase64: string;
}
