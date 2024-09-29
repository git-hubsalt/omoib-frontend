import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ResultTest from './ResultTest';

const App: React.FC = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/Result" element={<ResultTest />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;