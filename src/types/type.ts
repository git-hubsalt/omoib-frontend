export interface ClothesBase {
  name: string;
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  clothesType: 'upper' | 'lower' | 'shoes' | 'bag' | 'cap' | 'outer' | 'overall';
}

export interface ClothesInfo extends ClothesBase {
  id: number;
  imageUrl: string;
}

export interface ClothesImage extends ClothesBase {
  imageBase64: string;
}
