import React from 'react';
import styled from 'styled-components';
import { MainParagraph } from './MainListStyle';

interface MainListProps {
  icon: React.ReactNode; // 아이콘 컴포넌트를 props로 받음
  text: string; // 텍스트를 props로 받음
}

const MainList: React.FC<MainListProps> = ({ icon, text }) => {
  return (
    <ListLayout>
      <IconBox>
        {icon}
      </IconBox>
      <div>
        <MainParagraph>{text}</MainParagraph>
      </div>
    </ListLayout>
  );
};

export default MainList;

const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 31px;
    background-color: #F4F4F4;
    border-radius: 5px;
`;

const ListLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    width: 100%;
`;