import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuthStore from '../../stores/authStore';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const queryParam = new URLSearchParams(window.location.search);
  const token = queryParam.get('token');
  const isNewUser = queryParam.get('isNewUser');
  const { login } = useAuthStore();

  useEffect(() => {
    if (token) {
      login(token);

      const redirectUrl = (isNewUser) ? '/join' : '/';
      navigate(redirectUrl);
    }
  }, []);

  return (
    <>
      <p>카카오 로그인 중입니다...</p>
    </>
  );
};

export default KakaoCallback;
