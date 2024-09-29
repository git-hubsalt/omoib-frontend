import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`;

export const FlexJustifyContentCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexStart = styled(Flex)`
  justify-content: flex-start;
`;

export const FlexEnd = styled(Flex)`
  justify-content: flex-end;
`;