import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    max-width: 122px;
    width: 100%;
    padding: 6px 4px;
    position: relative; /* 상대 위치 설정 */
`;

export const ImagePlaceholder = styled.div`
    width: 110px;
    height: 110px;
    background-color: #f0f0f0;
    border-radius: 10px;
    align-items: center;
`;

export const Image = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 10px;
    object-fit: cover; // 이미지가 영역에 맞게 조정됨
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 13px;
    max-width: 110px;
    width: 100%;
    margin-top: 4px;
    color: #000;
`;

export const Date = styled.p`
    font-size: 10px;
    margin: 4px 0;
    color: #888;
`;

export const TagsWrapper = styled.div`
    display: flex;
    gap: 8px;
`;


export const CheckIcon = styled.div`
    position: absolute;
    top: 4px;
    right: 25px;
    background-color: #1e1e1e;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`;

export const IconBox = styled.div`
    position: absolute;
    z-index: 1;
    padding: 4px;
    width: 100%;
    max-width: 122px;
    display: flex;
`;