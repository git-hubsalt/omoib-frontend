import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuthStore from '../../stores/authStore';
import useUserInfoStore from "../../stores/userStore";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const isNewUser = searchParams.get('isNewUser');
  const token = searchParams.get('token');
  const { login } = useAuthStore();
  const { setUserInfo } = useUserInfoStore();

  useEffect(() => {
    if (token) {
      // console.log(`token: ${token}`);
      // console.log('isNewUser: ', isNewUser);
      login(token);
    }

    if (isNewUser && isNewUser === 'false') {
      const username = searchParams.get('username');
      const profileUrl = searchParams.get('profileUrl');
      // console.log(`username: ${username}`);
      // console.log(`profileUrl: ${profileUrl}`);

      if (username) {
        setUserInfo({ username, profileUrl });
      }
    }

    const redirectUrl = (isNewUser && isNewUser === 'true') ? '/signup' : '/';
    navigate(redirectUrl);
  }, []);

  return (
    <>
      <p>카카오 로그인 중입니다...</p>
    </>
  );
};

export default KakaoCallback;
