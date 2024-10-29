import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuthStore from '../../stores/authStore';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token');
  const { login } = useAuthStore();

  useEffect(() => {
    if (token) {
      login(token);
      navigate('/');
    }
  }, []);

  return (
    <>
      <p>카카오 로그인 중입니다...</p>
    </>
  );
};

export default KakaoCallback;
