// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Onboarding from "./pages/Onboarding/index"
import OutfitRecommendations from "./pages/OutfitRecommendations/index";
import VirtualFitting from "./pages/VirtualFitting/index";
const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
          <BrowserRouter>
              <Routes>
                  <Route path='/onboarding' element={<Onboarding />} />
                  <Route path='/outfit-recommendations' element={<OutfitRecommendations/>}/>
                  <Route path='/virtual-fitting' element={<VirtualFitting/>}/>
              </Routes>
          </BrowserRouter>
      </>

  );
};

export default App;
