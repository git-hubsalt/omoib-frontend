import { create } from 'zustand'

const useStore = create(set => ({
    bears: 0, // 초기값 선언
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }) // 0 으로 리셋
}))

export default useStore