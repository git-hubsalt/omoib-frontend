import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    max-width: 393px;
    width: 100%;

    & > * {
        padding: 0 10px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const InstructionText = styled.p`
    margin-top: 12px;
    font-size: 0.875rem;
    color: #555;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    align-items: center;
    
    
    & > * {
  
        width: 100%;
        max-width: 393px;
    }
`;

export const FooterButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    max-width: 393px;
    width: 100%;
`;

export const SpinnerWrapper = styled.div`
    padding-top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;