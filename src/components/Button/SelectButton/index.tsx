import React from 'react';
import styled from 'styled-components';

interface SelectButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ label, isSelected, onClick }) => {
  return (
    <StyledButton isSelected={isSelected} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default SelectButton;

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

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#75C4E6' : '#e6f7ff')};
  }
`;