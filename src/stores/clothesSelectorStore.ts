import { create } from 'zustand';
import { ClothesInfo } from '../types/type';

interface ClothesSelectorState {
  clothesInfos: ClothesInfo[];
  addClothesInfo: (clothesInfo: ClothesInfo) => void;
  removeClothesInfo: (clothesInfo: ClothesInfo) => void;
  setClothesInfos: (clothesInfos: ClothesInfo[]) => void;
  clearClothesInfo: () => void;
}

const useClothesSelectorStore = create<ClothesSelectorState>()(
  set => ({
    clothesInfos: [],
    addClothesInfo: (clothesInfo: ClothesInfo) => set((state) =>
      ({ clothesInfos: [...state.clothesInfos, clothesInfo] })),
    removeClothesInfo: (clothesInfo: ClothesInfo) => set((state) =>
      ({ clothesInfos: state.clothesInfos.filter((item) => item != clothesInfo) })),
    setClothesInfos: (clothesInfos: ClothesInfo[]) => set({ clothesInfos: clothesInfos }),
    clearClothesInfo: () => set({ clothesInfos: [] }),
  })
)

export default useClothesSelectorStore;
