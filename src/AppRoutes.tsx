import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/index';
import KakaoCallback from './pages/KakaoCallback';
import RegisterPage from './pages/RegisterPage';
import ClosetPage from './pages/ClosetPage/index';
import WishPage from './pages/WishPage/index';
import Onboarding from './pages/OnboardingPage/index';
import OutfitRecommendations from './pages/OutfitRecommendations/index';
import VirtualFitting from './pages/VirtualFitting/index';
import Review from './pages/ReviewPage';
import MyPage from './pages/MyPage';
import LoadingPage from './pages/LoadingPage';
import NoticePage from './pages/NoticePage';
import HistoryDetailPage from './pages/HistoryPage';
import SelectClothesPage from './pages/SelectClothesPage';
import SelectVirtualFittingPage from './pages/SelectVirtualFittingPage';
import HistoryPage from './pages/HistoryPage';
import SignupPage from './pages/SignupPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/callback" element={<KakaoCallback />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/profile/register/:type" element={<RegisterPage />} />
      <Route path="/virtual-fitting" element={<VirtualFitting />} />
      <Route path="/recommendations/outfits" element={<OutfitRecommendations />} />
      <Route path="/closet" element={<ClosetPage />} />
      <Route path="/wishlist" element={<WishPage />} />
      <Route path="/history/:id" element={<HistoryDetailPage />} />
      <Route path="/review" element={<Review />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/virtual-fitting/select" element={<SelectVirtualFittingPage />} />
      <Route path="/outfit/select" element={<SelectClothesPage />} />
    </Routes>
  );
};

export default AppRoutes;