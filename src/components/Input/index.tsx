import React, {FC} from "react";
import {InputBox, StyledInput} from "./style";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ onChange, value, placeholder }) => {
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

export default Input;
