import React from 'react';
import Header from '../../components/Header';
import { LogoutWrapper, InfoWrapper } from './style';
import { useQuery } from 'react-query';
import { privateAxiosInstance } from '../../apis/axiosInstance';

// 사용자 정보 가져오기 API 함수
const fetchUserData = async () => {
  const { data } = await privateAxiosInstance.get('/mypage'); // 실제 API 경로로 수정
  return data;
};

export default function MyPage() {
  const { data, isLoading, error } = useQuery('userData', fetchUserData);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류가 발생했습니다.</p>;

  return (
    <div>
      <Header text="마이페이지" />
      <InfoWrapper>
        <div>닉네임</div>
        <div>{data.name}</div>
      </InfoWrapper>
      <InfoWrapper>
        <div>이메일</div>
        <div>{data.email}</div>
      </InfoWrapper>
      <InfoWrapper>
        <div>신체 사진</div>
        <div>
          {data.rowImagePath ? (
            <img src={data.rowImagePath} alt="신체 사진" style={{ width: '100px' }} />
          ) : (
            <p>사진이 없습니다.</p>
          )}
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <div>프로필 사진</div>
        <div>
          {data.profileImagePath ? (
            <img src={data.profileImagePath} alt="프로필 사진" style={{ width: '100px' }} />
          ) : (
            <p>사진이 없습니다.</p>
          )}
        </div>
      </InfoWrapper>
      <LogoutWrapper>
        <p>로그아웃</p>
      </LogoutWrapper>
    </div>
  );
}