import React, {useState} from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/index';
import KakaoCallback from "./pages/KakaoCallback";
import RegisterPage from "./pages/Register";
import JoinPage from "./pages/Join";
import History from './pages/History';
import ShowResult from './pages/ShowResult';

const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/callback" element={<KakaoCallback/>}/>
            <Route path="/join" element={<JoinPage/>}/>
            <Route path="/register/:type" element={<RegisterPage/>}/>
            <Route path="/coordination" element={<MainPage/>}/> // 코디 추천
            <Route path="/virtual-fitting" element={<MainPage/>}/> // 가상 피팅
            <Route path="/closet" element={<MainPage/>}/> // 옷장
            <Route path="/wish" element={<MainPage/>}/> // 위시
            <Route path="/history" element={<History/>}/> // 히스토리
            <Route path="/result" element={<ShowResult/>}/> // 피팅&코디 결과
          </Routes>
        </BrowserRouter>

      </div>
  );
};


export default App;
