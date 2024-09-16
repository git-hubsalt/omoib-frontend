import React from "react";
import styled from "styled-components";

// 버튼 스타일에 따른 속성 정의
type ButtonVariant = "footerButton" | "registerButton" | "historyButton" | "reviewButton";

interface ButtonStyleProps {
    variant: ButtonVariant;
}

// 각 variant에 따른 스타일 정의
const buttonVariants = {
    footerButton: `
        width: 100%;
        height: 82px;
        padding: 30px 120px;
        background-color: #89CEFA;
        border: none;
        color: white;
    `,
    registerButton: `
        width: 208px;
        height: 56px;
        background-color: #89CEFA;
        color: white;
        border-radius: 14px;
        border: none;
    `,
    historyButton: `
        width: 100%;
        height: 56px;
        background-color: #89CEFA;
        color: white;
        border-radius: 14px;
        border: none;
    `,
    reviewButton: `
        width: 100%;
        height: 56px;
        background-color: transparent;
        border: 1px solid var(--main);
        border-radius: 14px;
        color: #919191;
    `,
};

// 버튼 스타일 컴포넌트
const ButtonStyle = styled.button<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    ${(props) => buttonVariants[props.variant]}
`;

// 버튼 컴포넌트 인터페이스
interface ButtonProps extends ButtonStyleProps {
    children: React.ReactNode;
    onClick?: () => void;
}

// 버튼 컴포넌트
const ClickButton = ({ children, onClick, variant }: ButtonProps) => {
    return (
        <ButtonStyle variant={variant} onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

export default ClickButton;
