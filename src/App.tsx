import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/index';
import KakaoCallback from './pages/KakaoCallback';
import RegisterPage from './pages/Register';
import JoinPage from './pages/Join';
import History from './pages/History/index';
import ShowResult from './pages/Result/index';
import Review from './pages/Review';
import Notice from './pages/Notice';
import MyPage from './pages/MyPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/callback" element={<KakaoCallback />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/register/:type" element={<RegisterPage />} />
          <Route path="/coordination" element={<MainPage />} /> // 코디 추천
          <Route path="/virtual-fitting" element={<MainPage />} /> // 가상 피팅
          <Route path="/closet" element={<MainPage />} /> // 옷장
          <Route path="/wish" element={<MainPage />} /> // 위시
          <Route path="/history" element={<History />} /> // 히스토리
          <Route path="/notice" element={<Notice />} /> // 알림
          <Route path="/my-page" element={<MyPage />} /> // 마이페이지
          <Route path="/result" element={<ShowResult />} /> // 피팅&코디 결과
          <Route path="/review" element={<Review />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
