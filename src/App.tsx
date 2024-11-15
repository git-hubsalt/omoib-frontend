import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // 라우트 정의를 별도 파일로 분리

// QueryClient 생성
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;