// stores/virtualFittingStore.ts
import {create} from 'zustand';

interface ClothesInfo {
  id: number;
  name: string;
  clothesType: '하의' | '상의' | '신발' | '가방' | '모자' | '아우터' | '기타';
  seasonTypes: ('봄' | '여름' | '가을' | '겨울')[];
  imageUrl: string;
}

interface VirtualFittingStore {
  selectedClothes: ClothesInfo[];
  addClothesToVirtualFitting: (clothes: ClothesInfo) => void;
  clearSelectedClothes: () => void;
}

const useVirtualFittingStore = create<VirtualFittingStore>((set) => ({
  selectedClothes: [],
  addClothesToVirtualFitting: (clothes) =>
    set((state) => ({
      selectedClothes: [...state.selectedClothes, clothes],
    })),
  clearSelectedClothes: () => set({ selectedClothes: [] }),
}));

export default useVirtualFittingStore;