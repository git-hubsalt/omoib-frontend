import React, {useState} from 'react';
import {GlobalStyles} from './styles/GlobalStyles';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {recommendationData, fittingData} from './data';
import MainPage from './pages/MainPage/index';
import KakaoCallback from "./pages/KakaoCallback";
import RegisterPage from "./pages/Register";
import JoinPage from "./pages/Join";
import History from './pages/History';
import ClosetPage from './pages/ClosetPage/index';
import WishPage from './pages/WishPage/index'
import Onboarding from "./pages/Onboarding/index"
import OutfitRecommendations from "./pages/OutfitRecommendations/index";
import VirtualFitting from "./pages/VirtualFitting/index";
import Review from './pages/Review';
import MyPage from './pages/MyPage';
import LoadingPage from './pages/LoadingPage';
import NoticePage from './pages/NoticePage';


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
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/callback" element={<KakaoCallback/>}/>
          <Route path="/join" element={<JoinPage/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path="/register/:type" element={<RegisterPage/>}/>
          <Route path="/virtual-fitting" element={<VirtualFitting/>}/> // 가상 피팅
          <Route path='/outfit-recommendations' element={<OutfitRecommendations/>}/>//코디추천
          <Route path="/closet" element={<ClosetPage/>}/> // 옷장
          <Route path="/wish" element={<WishPage/>}/> // 위시
          <Route path="/history" element={<History/>}/> // 히스토리
          <Route path="/review" element={<Review />} />
          <Route path="/my-page" element={<MyPage/>}/>
          <Route path="/loading" element={<LoadingPage/>}/>
          <Route path="/notice" element={<NoticePage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};


export default App;