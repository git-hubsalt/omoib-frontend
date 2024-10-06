import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { recommendationData, fittingData } from './data';
import MainPage from './pages/MainPage/index';
import KakaoCallback from "./pages/KakaoCallback";
import RegisterPage from "./pages/Register";
import JoinPage from "./pages/Join";
import History from './pages/History';
import ClosetPage from './pages/ClosetPage/index';
import WishPage from './pages/WishPage/index'

const App: React.FC = () => {
  const [isVirtualFitting, setIsVirtualFitting] = useState(false); 
  const [isDeleted, setIsDeleted] = useState(recommendationData);
  const [currentId, setCurrentId] = useState(recommendationData[0]?.id || -1);
  const [isRender, setIsRender] = useState(false);
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
  const currentIdForPage = isVirtualFitting
  ? fittingData[0]?.id || 1
  : recommendationData[0]?.id || 1;
  
  return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/callback" element={<KakaoCallback/>}/>
            <Route path="/join" element={<JoinPage/>}/>
            <Route path="/register/:type" element={<RegisterPage/>}/>
            <Route path="/coordination" element={<MainPage/>}/> // 코디 추천
            <Route path="/virtual-fitting" element={<MainPage/>}/> // 가상 피팅
            <Route path="/closet" element={<MainPage/>}/> // 옷장
            <Route path="/wish" element={<MainPage/>}/> // 위시
            <Route path="/history" element={<History recommendationData={recommendationData} fittingData={fittingData} isVirtualFitting={false} onClickDelete={onClickDelete} currentId={currentIdForPage}/>}/> // 히스토리
          </Routes>
        </BrowserRouter>

      </div>
  );
};


export default App;
