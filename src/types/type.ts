export interface ClothesInfo {
  id: number;
  name: string;
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  clothesType: 'upper' | 'lower' | 'shoes' | 'bag' | 'cap' | 'outer' | 'overall';
  imageUrl: string;
}
