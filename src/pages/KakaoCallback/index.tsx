import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuthStore from '../../stores/authStore';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const isNewUser = searchParams.get("isNewUser");
  const token = searchParams.get('token');
  const { login } = useAuthStore();

  useEffect(() => {
    if (token) {
      console.log(`token: ${token}`);
      login(token);
    }

    const redirectUrl = (isNewUser) ? '/signup' : '/';
    navigate(redirectUrl);
  }, []);

  return (
    <>
      <p>카카오 로그인 중입니다...</p>
    </>
  );
};

export default KakaoCallback;
