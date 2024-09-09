// src/App.tsx
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import TagButton from './components/Button/TagButton';

const App: React.FC = () => {
  return (
      <>
        <GlobalStyles />
        <h1>App</h1>
        <TagButton name='#가을' />
      </>
  );
};

export default App;