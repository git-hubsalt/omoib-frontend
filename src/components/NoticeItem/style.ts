import styled from 'styled-components';
import { ReactComponent as Bell } from '../../assets/main/bell.svg';

export const NoticeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const BellIcon = styled(Bell)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

export const NoticeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainText = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: #333;
`;

export const SubText = styled.p`
    padding-top: 5px;
    font-size: 10px;
    font-weight: 500;
    color: #666;
`;