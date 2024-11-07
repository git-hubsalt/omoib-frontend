import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import KakaoCallback from './pages/KakaoCallback';
import RegisterPage from './pages/RegisterPage';
import ClosetPage from './pages/ClosetPage';
import WishPage from './pages/WishPage';
import Onboarding from './pages/OnboardingPage';
import OutfitRecommendations from './pages/OutfitRecommendationsPage';
import MyPage from './pages/MyPage';
import LoadingPage from './pages/LoadingPage';
import NoticePage from './pages/NoticePage';
import HistoryDetailPage from './pages/HistoryPage';
import SelectClothesPage from './pages/SelectClothesPage';
import SelectVirtualFittingPage from './pages/SelectVirtualFittingPage';
import HistoryPage from './pages/HistoryPage';
import SignupPage from './pages/SignupPage';
import VirtualFittingPage from './pages/VirtualFittingPage';
import ReviewPage from './pages/ReviewPage';
import FallbackPage from "./pages/FallbackPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/callback" element={<KakaoCallback />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/profile/register/:type" element={<RegisterPage />} />
      <Route path="/virtual-fitting" element={<VirtualFittingPage />} />
      <Route path="/recommendations/outfits" element={<OutfitRecommendations />} />
      <Route path="/closet" element={<ClosetPage />} />
      <Route path="/wishlist" element={<WishPage />} />
      <Route path="/history/:id" element={<HistoryDetailPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/virtual-fitting/select" element={<SelectVirtualFittingPage />} />
      <Route path="/outfit/select" element={<SelectClothesPage />} />
      <Route path="/fallback" element={<FallbackPage />} />
    </Routes>
  );
};

export default AppRoutes;
