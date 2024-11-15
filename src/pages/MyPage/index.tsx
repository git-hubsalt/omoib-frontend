import React from 'react';
import Header from '../../components/Header';
import { LogoutWrapper, InfoWrapper, BodyImageWrapper, ProfileWrapper, ImageWrapper, BodyImage} from './style';

import { useQuery } from 'react-query';
import { privateAxiosInstance } from '../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { ReactComponent as Spinner } from '../../assets/spin.svg';
import { SpinnerWrapper } from '../SelectClothesPage/style';
import {ReactComponent as Profile} from '../../assets/profile-large.svg';

const fetchUserData = async () => {
  const { data } = await privateAxiosInstance.get('/mypage');
  return data;
};

export default function MyPage() {
  const { data, isLoading, error } = useQuery('userData', fetchUserData);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/onboarding');
  };

  if (isLoading) return <SpinnerWrapper><Spinner/></SpinnerWrapper>;
  if (error) return <p>오류가 발생했습니다.</p>;

  return (
    <div>
      <Header text="마이페이지" />
      <ProfileWrapper>
        {/*<div>프로필 사진</div>*/}
        <div>
          {data.profileImagePath ? (
              <ImageWrapper src="https://i.pinimg.com/736x/2d/4b/21/2d4b21610595c23f30c2c1f0f04fc12c.jpg" alt="프로필 사진"
                   style={{ width: '100px' }} />
            ) : (
            <Profile />
            )}
        </div>
      </ProfileWrapper>
      <InfoWrapper>
      <div>닉네임</div>
        <div>{data.name}</div>
      </InfoWrapper>
      <InfoWrapper>
        <div>이메일</div>
        <div>{data.email}</div>
      </InfoWrapper>
      <BodyImageWrapper>
        {/*<div>신체 사진</div>*/}
        <div>
          {data.rowImagePath ? (
            <BodyImage src={data.rowImagePath} alt="신체 사진"  />
          ) : (
            <p>사진이 없습니다.</p>
          )}
        </div>
      </BodyImageWrapper>
      <LogoutWrapper onClick={handleLogout}>
        <p>로그아웃</p>
      </LogoutWrapper>
    </div>
  );
}