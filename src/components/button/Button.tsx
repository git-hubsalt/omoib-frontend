import React from "react";
import styled from "styled-components";

type ButtonStyleProps = {
    state : "normal";
    size : "small"| "medium"| "large"
}

const buttonSize = {
    small: `
        width: 48%;
        height: 82px;
    `,
    medium: `
        width: 344px;
        height: 56px;
    `,
    large: `
        width: 100%;
        height: 82px;
    `,
};

const ButtonStyle = styled.button<ButtonStyleProps>`
    border-radius: ${(props) =>
            props.size === "medium" ? "14px" : "0px"};
    background-color: var(--main);
    color: white;
    border: none;
    cursor: pointer;
    ${(props) => buttonSize[props.size]}
`;

interface BunttonProps extends ButtonStyleProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ children, onClick, ...styleProps }: BunttonProps) => {
    return (
        <ButtonStyle {...styleProps} onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

export default Button;