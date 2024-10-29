import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const AddClothesButton: React.FC = () => {
  return (
    // 옷장에 옷 추가하는 페이지로 이동
    <ButtonLayout>
      <Link to="/register/add-clothes">
        <ButtonContainer>
          <Plus/>
        </ButtonContainer>
      </Link>
    </ButtonLayout>

  );
};

export default AddClothesButton;

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 122px;
    width: 100%;
    padding: 6px 4px;`


const ButtonContainer = styled.div`
  width: 110px;
  height: 110px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
