import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    if (token) {
      //TODO: 쿠키에 저장하기
      localStorage.setItem('token', token);
      navigate('/');
    }
  }, []);

  return (
    <>
      <p>카카오 로그인 중입니다...</p>
    </>
  );
};

export default Index;
