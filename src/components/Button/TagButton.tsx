import styled from 'styled-components';
import {useState} from "react";

type ButtonProps = {
    className?: string;
    name: string;
    withHash?: boolean;
    onClick?: () => void;
};

const TagButton = ({ className, name, withHash = true, onClick }: ButtonProps) => {
    const [selected, setSelected] = useState<boolean>(false);
    const tagContent = withHash ? `#${name}` : name; // withHash가 true이면 # 추가
    const { backgroundColor, color } = getTagStyles(name);
    const defaultColor = '#F4F4F4';
    const defaultTextColor = '#989898';

    const handleTagClick = () => {
        setSelected((current) => !current);
        if (onClick) {
            onClick();
        }
    }

    return (
      <TagBox className={className}
              backgroundColor={(selected) ? backgroundColor : defaultColor}
              withHash={withHash}
              onClick={handleTagClick}
      >
          <StyledTag color={(selected) ? color : defaultTextColor}>{tagContent}</StyledTag>
      </TagBox>
    );
};

// 계절에 따른 색상 반환
const getTagStyles = (tagContent: string) => {
    const seasonColors: Record<string, { backgroundColor: string; color: string }> = {
        가을: { backgroundColor: '#D07C2E', color: 'white' },
        겨울: { backgroundColor: '#89CEFA', color: 'white' },
        봄: { backgroundColor: '#FFABEC', color: 'white' },
        여름: { backgroundColor: '#A5E189', color: 'white' },
    };

    const clothingColors: Record<string, { backgroundColor: string; color: string }> = {
        상의: { backgroundColor: '#FBE56B', color: 'white' },
        하의: { backgroundColor: '#FBE56B', color: 'white' },
        '드레스/원피스': { backgroundColor: '#FBE56B', color: 'white' },
    };

    if (seasonColors[tagContent]) {
        return seasonColors[tagContent]; // 계절일 경우 해당 색상 반환
    } else if (clothingColors[tagContent]) {
        return clothingColors[tagContent]; // 의류일 경우 해당 색상 반환
    }

    return { backgroundColor: 'transparent', color: 'var(--black)' }; // 기본값
};

// withHash에 따라 width를 동적으로 설정
const TagBox = styled.div<{ backgroundColor: string; withHash: boolean }>`
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${(props) => props.backgroundColor};
    //padding: 2px 4px;
    min-width: ${(props) => (props.withHash ? '32px' : '50px')};
    max-width: ${(props) => (props.withHash ? '32px' : '50px')}; //적용 안돼서 수정
    min-height: ${(props) => (props.withHash ? '16px' : '30px')};
    max-height: ${(props) => (props.withHash ? '16px' : '30px')};
`;

const StyledTag = styled.div<{ color: string }>`
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export default TagButton;
