import React from 'react';
import Header from '../../components/Header/Header';
import { LogoutWrapper } from './style';
import { InfoWrapper } from './style';


export default function MyPage() {
  const data = {
    nickname: '조다운',
    email: 'awhekdns@kookmin.ac.kr',
  };
  return (
    <div>
      <Header text="마이페이지" />
      <InfoWrapper>
        <div>닉네임</div>
        <div>{data.nickname}</div>
      </InfoWrapper>
      <InfoWrapper>
        <div>이메일</div>
        <div>{data.email}</div>
      </InfoWrapper>
      <InfoWrapper>
        <div>신체 사진</div>
        <div></div>
      </InfoWrapper>
      <LogoutWrapper>
        <p>로그아웃</p>
      </LogoutWrapper>
    </div>
  );
}