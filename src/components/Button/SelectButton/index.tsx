import React, { useState } from 'react';

const OutfitSelectionPage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('추천 코디');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton
          isSelected={selectedButton === '추천 코디'}
          onClick={() => handleButtonClick('추천 코디')}
        >
          추천 코디
        </StyledButton>
        <StyledButton
          isSelected={selectedButton === '직접 선택'}
          onClick={() => handleButtonClick('직접 선택')}
        >
          직접 선택
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

export default OutfitSelectionPage;

import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px 0;
`;

const StyledButton = styled.button<{ isSelected: boolean }>`
    padding: 10px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#89CEFA')};
    background-color: ${({ isSelected }) => (isSelected ? '#89CEFA' : '#fff')};
    border: solid 1px #89CEFA;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s;
`;