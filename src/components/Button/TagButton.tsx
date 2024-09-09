import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    className?: string;
    // children?: ReactNode;
    name: string;
};

const TagButton =({className, name}:ButtonProps) => {
    const isHashtag = name.startsWith('#');  // 태그가 #으로 시작하는지 확인
    let backgroundColor = 'transparent'; //아닐 경우 기본 배경은 투명색
    let color = 'var(--black)'; 
    let tagContent = name;

    if (isHashtag) {
        tagContent = name.substring(1); 

        const isSeason = tagContent === '가을' || tagContent === '겨울' || tagContent === '봄' || tagContent === '여름';
        const isClothing = tagContent === '상의' || tagContent === '하의' || tagContent === '드레스/원피스';

        if (isSeason) {
            backgroundColor = '#D07C2E';
            color = 'var(--white)';
        } else if (isClothing) {
            backgroundColor = 'var(--blue)';
            color = 'var(--white)';
        }
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