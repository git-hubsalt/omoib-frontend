import styled from 'styled-components';

export const PageLayout = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainListWrapper = styled.div`
    padding: 12px 24px;
    display: grid;
    flex-direction: column;
    max-height: 364px;
    height: 100%;
`;

export const ProfileBox = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`;


export const HeaderBox = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextBox = styled.div`
    text-align: center;
    font-size: 12px;
    color: #575757;
    padding: 20px;;`;

export const ProfileIconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 100%;
`;

export const NoticeWrapper = styled.div`
    cursor: pointer;
`;

