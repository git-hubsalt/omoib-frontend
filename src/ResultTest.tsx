import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import ShowResultPage from './Pages/ShowResult';

import { recommendationData, fittingData } from './data';


const ResultTest: React.FC = () => {
    const [isVirtualFitting, setIsVirtualFitting] = useState(false); 

    return (
        <>
            <button onClick={() => setIsVirtualFitting(false)}>코디 추천 결과 보기</button>
            <button onClick={() => setIsVirtualFitting(true)}>가상 피팅 결과 보기</button>

            <Routes>
                <Route path="/" element={
                    <ShowResultPage 
                        isVirtualFitting={isVirtualFitting}
                        recommendationData={recommendationData} 
                        fittingData={fittingData} 
                    />
                } />
            </Routes>
        </>
    );
};

export default ResultTest;
