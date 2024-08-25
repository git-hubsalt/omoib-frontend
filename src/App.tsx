// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Card from "./components/card/Card";


const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
        <h1>App</h1>
          <Card/>
      </>
  );
};

export default App;