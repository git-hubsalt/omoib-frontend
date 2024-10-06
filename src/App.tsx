// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import MainPage from './pages/MainPage/index';
// import KakaoCallback from "./pages/KakaoCallback";
// import RegisterPage from "./pages/Register";

import Onboarding from "./Pages/Onboarding/Onboarding"
import OutfitRecommendations from "./Pages/OutfitRecommendations/OutfitRecommendations";
import VirtualFitting from "./Pages/VirtualFitting/VirtualFitting";
const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
          <BrowserRouter>
              <Routes>
                  <Route path='/onboarding' element={<Onboarding />} />
                  <Route path='/or' element={<OutfitRecommendations/>}/>
                  <Route path='/vf' element={<VirtualFitting/>}/>
              </Routes>
          </BrowserRouter>
      </>
      // <div className="App">
      //   <BrowserRouter>
      //     <GlobalStyles />
      //     <Routes>
      //       <Route path="/" element={<MainPage/>}/>
      //       <Route path="/callback" element={<KakaoCallback/>}/>
      //       <Route path="/onboarding" element={<OnboardingPage/>}/>
      //       <Route path="/register/:type" element={<RegisterPage/>}/>
      //       <Route path="/coordination" element={<MainPage/>}/> // 코디 추천
      //       <Route path="/virtual-fitting" element={<MainPage/>}/> // 가상 피팅
      //       <Route path="/closet" element={<MainPage/>}/> // 옷장
      //       <Route path="/wish" element={<MainPage/>}/> // 위시
      //       <Route path="/history" element={<MainPage/>}/> // 히스토리
      //     </Routes>
      //   </BrowserRouter>
      // </div>
  );
};

export default App;
