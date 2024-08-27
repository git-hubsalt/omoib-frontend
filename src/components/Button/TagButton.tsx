import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    className?: string;
    children?: ReactNode;
    name: string;
};

const TagButton =({className, name}:ButtonProps) => {
    const isSeason = name === '#가을' || name === '#겨울' || name === '#봄' || name === '#여름';
    const isClothing = name === '#상의' || name === '#하의' || name === '#드레스/원피스';
    //기본값은 옷 등록했던 태그
    let backgroundColor = 'transparent'; 
    let color = 'var(--black)'; 

    if (isSeason) {
        backgroundColor = '#D07C2E';
        color = 'var(--white)';
    } else if (isClothing) {
        backgroundColor = 'var(--blue)';
        color = 'var(--white)';
    }

    return(
        <TagBox className={className} backgroundColor={backgroundColor}>
            <StyledTag color={color}>
                {name} 
            </StyledTag>
        </TagBox>
    );
};

const TagBox =styled.div<{ backgroundColor: string }>`
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 2px 4px; 
    width: 32px;
    background-color: ${(props) => props.backgroundColor};
`;    

const StyledTag = styled.div<{color: string}>`
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => props.color};  
`;

export default TagButton;