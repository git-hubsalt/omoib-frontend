import React, {useState} from 'react';
import Header from '../../components/Header/Header'; // Header 컴포넌트의 경로를 맞게 설정하세요
import Uploader from "../../components/Uploader/Uploader";
import * as style from './OutfitRecommendationsStyle'; // 스타일 경로를 맞게 설정하세요
import FooterButton from "../../components/Button/ClickButton"; // ClickButton import

const OutfitRecommendations: React.FC = () => {

    return (
        <div>
            <Header text="코디추천"/> {/* 헤더에 텍스트 전달 */}
            <style.Text>이 아이템은 꼭 넣고 싶어요!</style.Text>
            <Uploader width={310} height={466}>
                <Uploader.Clothes
                    buttonText={'아이템 등록하기'}
                    onClothesChange={(clothes: string) => {
                    }}
                />
            </Uploader>
            <style.Text>오늘의 키워드를 말해주세요.</style.Text>
            <FooterButton variant="footerButton" >
                완료
            </FooterButton>
        </div>
    );
};

export default OutfitRecommendations;
