import React from "react";
import styled from "styled-components";
import * as C from "../../styles/ClickButtonStyles";

// 버튼 스타일에 따른 속성 정의
type ButtonVariant = "footerButton" | "registerButton" | "historyButton" | "reviewButton";

interface ButtonStyleProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    footerButton: C.ClickButtonStyles.footerButton,
    registerButton: C.ClickButtonStyles.registerButton,
    historyButton: C.ClickButtonStyles.historyButton,
    reviewButton: C.ClickButtonStyles.reviewButton,
};


// 버튼 스타일 컴포넌트 (공통)
const ButtonStyle = styled.button<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.43px;
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
