import { create } from 'zustand';
import { ClothesInfo } from '../types/type';

interface ClothesSelectorState {
  clothesInfos: ClothesInfo[];
  setClothesInfos: (clothesInfos: ClothesInfo[]) => void;
  clearClothesInfo: () => void;
}

const useClothesSelectorStore = create<ClothesSelectorState>()(
  set => ({
    clothesInfos: [],
    setClothesInfos: (clothesInfos: ClothesInfo[]) => set({ clothesInfos: clothesInfos }),
    clearClothesInfo: () => set({ clothesInfos: [] }),
  })
)
