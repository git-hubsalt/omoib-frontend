import React, { useState } from "react";
import InputStyle from "./InputStyle";  

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <InputStyle
      onChange={handleChange} 
      value={inputValue} 
      placeholder="이름을 입력해주세요" 
    />
  );
};

export default Input;
