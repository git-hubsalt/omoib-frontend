import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ResultTest from './ResultTest';

const App: React.FC = () => {
    return (
        <Router> 
            <Routes>
                <Route path="/Result" element={<ResultTest />} />
            </Routes>
        </Router>
    );
};

export default App;
