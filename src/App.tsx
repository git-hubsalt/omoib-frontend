import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/index';
import ClosetPage from './pages/ClosetPage/index';
import WishPage from './pages/WishPage/index'
import HistoryPage from './pages/HistoryPage/index'

const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/coordination" element={<MainPage/>}/> // 코디 추천
            <Route path="/virtual-fitting" element={<MainPage/>}/> // 가상 피팅
            <Route path="/closet" element={<ClosetPage/>}/> // 옷장
            <Route path="/wish" element={<WishPage/>}/> // 위시
            <Route path="/history" element={<HistoryPage/>}/> // 히스토리
          </Routes>
        </BrowserRouter>

      </div>
  );
};

export default App;
