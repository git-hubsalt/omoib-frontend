// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Button from "./components/button/Button";


const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
        <h1>App</h1>
      </>
  );
};

export default App;