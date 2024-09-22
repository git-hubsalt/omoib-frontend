import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MainParagraph, IconBox, ListLayout } from './MainListStyle';

interface MainListProps {
  icon: React.ReactNode;
  text: string;
  route: string; // 새로운 route prop 추가
}

const MainList: React.FC<MainListProps> = ({ icon, text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); // route로 이동
  };

  return (
    <ListLayout onClick={handleClick}>
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

