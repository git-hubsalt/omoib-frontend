import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // 라우트 정의를 별도 파일로 분리

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;