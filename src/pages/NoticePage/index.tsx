import React from 'react';
import Header from '../../components/Header/Header';
import Notice from '../../components/Notice/Notice'

export default function NoticePage() {

  return (
    <div>
      <Header text="알림"/>
      <Notice/>
      <Notice/>
    </div>
  );
}