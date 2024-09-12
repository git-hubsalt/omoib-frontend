import styled from "styled-components";
import { FC } from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string; 
}

const InputStyle: FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <InputBox>
      <StyledInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

const InputBox = styled.div`
  height: 47px;
  border: 1px solid var(--gray--1);
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 17px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  padding: 15px 10px;
`;

export default InputStyle;
