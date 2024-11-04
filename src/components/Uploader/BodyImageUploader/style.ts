import styled from "styled-components";


interface UploaderLayoutProps {
  width: number;
  height: number;
}

export const ContentsBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BodyImageUploaderLayout = styled.div<UploaderLayoutProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position:  0 0, 0 0, 100% 0, 0 100%;
    background-size: 2px 100%, 100% 2px, 2px 100% , 100% 2px;
    background-repeat: no-repeat;
    background-image:
            repeating-linear-gradient(0deg, var(--gray--5), var(--gray--5) 10px, transparent 10px, transparent 25px), // left
            repeating-linear-gradient(90deg, var(--gray--5), var(--gray--5) 10px, transparent 10px, transparent 25px), // top
            repeating-linear-gradient(180deg, var(--gray--5), var(--gray--5) 10px, transparent 10px, transparent 25px), // right
            repeating-linear-gradient(270deg, var(--gray--5), var(--gray--5) 10px, transparent 10px, transparent 25px); // bottom
    border-image: repeating-linear-gradient(0deg, var(--gray--5), var(--gray--5) 10px, transparent 10px, transparent 25px);
    border-radius: 10px;
`;

export const IconButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 62px;
`;

export const UploadButton = styled.button`
    background-color: var(--main);
    width: 208px;
    height: 56px;
    text-align: center;
    color: white;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.43px;
    border-radius: 14px;
    border: 1px solid var(--main);
`;
