//결과 페이지 이전의 페이지가 될 것 , 여기서 isVirtualFitting 값이 flase면 코디추천 결과로 가고 true면 가상피팅결과로 가게
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
