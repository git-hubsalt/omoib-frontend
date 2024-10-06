import React from 'react';
import Header from '../../components/Header/Header'; // Header 컴포넌트의 경로를 맞게 설정하세요
import Uploader from "../../components/Uploader/Uploader";
import Tab from "../../components/Tab/Tab";
import FooterButton from "../../components/Button/ClickButton";
import {VirtualFittingLayout} from "./style";

const VirtualFitting: React.FC = () => {

    return (
        <VirtualFittingLayout>
            <Header text="가상피팅" /> {/* 헤더에 텍스트 전달 */}
            {/* Tab 컴포넌트에서 tabs prop을 배열로 전달 */}
            <Tab tabs={['추천코디', '직접선택']} />
            {/* Uploader 컴포넌트 닫기 태그 수정 */}
            <Uploader width={310} height={450}>
                <Uploader.Clothes
                    buttonText={'아이템 등록하기'}
                    onClothesChange={(clothes: string) => {}}
                />
            </Uploader>
            <FooterButton variant="footerButton" >
                완료
            </FooterButton>
        </VirtualFittingLayout>
    );
};

export default VirtualFitting;
