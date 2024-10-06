import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { recommendationData, fittingData } from './data';
import MainPage from './pages/MainPage/index';
import KakaoCallback from "./pages/KakaoCallback";
import RegisterPage from "./pages/Register";
import JoinPage from "./pages/Join";
import History from './pages/History';
import ClosetPage from './pages/ClosetPage/index';
import WishPage from './pages/WishPage/index'
import Onboarding from "./pages/Onboarding/index"
import OutfitRecommendations from "./pages/OutfitRecommendations/index";
import VirtualFitting from "./pages/VirtualFitting/index";
const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/callback" element={<KakaoCallback/>}/>
            <Route path="/join" element={<JoinPage/>}/>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/register/:type" element={<RegisterPage/>}/>
            <Route path="/coordination" element={<MainPage/>}/> // 코디 추천
            <Route path="/virtual-fitting" element={<VirtualFitting/>}/> // 가상 피팅
              <Route path='/outfit-recommendations' element={<OutfitRecommendations/>}/>
              <Route path="/closet" element={<MainPage/>}/> // 옷장
            <Route path="/wish" element={<MainPage/>}/> // 위시
            <Route path="/history" element={<History recommendationData={recommendationData} fittingData={fittingData} isVirtualFitting={false} onClickDelete={onClickDelete} currentId={currentIdForPage}/>}/> // 히스토리
          </Routes>
        </BrowserRouter>

      </div>
  );
};


export default App;
