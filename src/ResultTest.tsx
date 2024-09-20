//결과 페이지 이전의 페이지가 될 것 , 여기서 isVirtualFitting 값이 flase면 코디추천 결과로 가고 true면 가상피팅결과로 가게
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import ShowResultPage from './pages/ShowResult';
import History from './pages/History';

import { recommendationData, fittingData } from './data';


const ResultTest: React.FC = () => {
    const [isVirtualFitting, setIsVirtualFitting] = useState(false); 
    const [isDeleted, setIsDeleted] = useState(recommendationData);
    const [currentId, setCurrentId] = useState(recommendationData[0]?.id || -1);

    const [isRender, setIsRender] = useState(false);

    //히스토리 삭제 버튼 임시 구현
    const onClickDelete = (id: number) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
          const updatedDataList = isDeleted.filter(item => item.id !== id); // 해당 id의 데이터 삭제
          setIsDeleted(updatedDataList); // 업데이트된 데이터 리스트로 상태 업데이트
          setIsRender(true);
          
        setCurrentId(prevId => {
        const newCurrentItem = updatedDataList.find(item => item.id !== prevId) || updatedDataList[0];
        return newCurrentItem?.id || -1;
        });
    }    
};
    //히스토리에서 이전 상세페이지에서 피팅 데이터 가져올 건지 코디 데이터 가져올 건지
    const currentIdForPage = isVirtualFitting
        ? fittingData[0]?.id || 1
        : recommendationData[0]?.id || 1;

    if (isRender) {
        return null;  // 렌더링 중단
    }
    // isVirtualFitting 상태에 따라 fittingData, recommendationData 중 첫 번째 항목의 id를 가져옴/ 기본값 == 1
    

    return (
        <>
            <button onClick={() => setIsVirtualFitting(false)}>코디 추천 결과 보기</button>
            <button onClick={() => setIsVirtualFitting(true)}>가상 피팅 결과 보기</button>

            <Routes>
                <Route path="/" element={
                    // <ShowResultPage 
                    //     isVirtualFitting={isVirtualFitting}
                    //     recommendationData={recommendationData} 
                    //     fittingData={fittingData} 
                    //     currentId={currentId}
                    // />
                    <History recommendationData={recommendationData} onClickDelete={onClickDelete} currentId={currentIdForPage} />
                } />
            </Routes>
        </>
    );
};

export default ResultTest;
