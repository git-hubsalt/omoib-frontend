import React from 'react';
import { ReactComponent as Back } from '../../assets/back.svg';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  BackWrapper,
  HeaderText,
  DeleteButton,
  DummyBox,
} from './style';

type HeaderProps = {
  text: string;
  onClickDelete?: () => void; // 선택적으로 받음 (삭제 버튼이 없을 수도 있으므로)
  showDeleteButton?: boolean; // 삭제 버튼 표시 여부
};

const Header = ({
  text,
  onClickDelete,
  showDeleteButton = false,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <HeaderContainer>
      <BackWrapper onClick={handleBackClick}>
        <Back />
      </BackWrapper>
      <HeaderText>{text}</HeaderText>
      {showDeleteButton &&
        onClickDelete && ( // 삭제 버튼 표시 여부 확인
          <DeleteButton onClick={onClickDelete} />
        )}
      {!showDeleteButton && <DummyBox />}
    </HeaderContainer>
  );
};

export default Header;
