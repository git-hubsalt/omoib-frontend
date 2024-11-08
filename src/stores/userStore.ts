import {create} from "zustand/index";
import {persist} from "zustand/middleware";

interface UserInfo {
  username: string;
  profileUrl: string | null;
}

interface UserState {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
}

const useUserInfoStore = create<UserState>()(
  persist<UserState>(
    set => ({
      userInfo: null,
      setUserInfo: (userInfo: UserInfo) => set({ userInfo: userInfo}),
    }),
    {
      name: 'userStore',
    }
  )
)

export default useUserInfoStore;
