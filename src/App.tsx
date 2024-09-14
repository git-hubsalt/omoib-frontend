// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Card from "./components/card/Card";
import Header from "./components/header/Header";


const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
        <h1>App</h1>
          <Card/>
        <Header text="안녕"/>
      </>
  );
};

export default App;