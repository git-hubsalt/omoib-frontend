import {create} from "zustand/index";

interface UserInfo {
  username: string;
  profileUrl: string | null;
}

interface UserState {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
}

const useUserInfoStore = create<UserState>()(
  set => ({
    userInfo: null,
    setUserInfo: (userInfo: UserInfo) => set({ userInfo: userInfo}),
  })
)

export default useUserInfoStore;
