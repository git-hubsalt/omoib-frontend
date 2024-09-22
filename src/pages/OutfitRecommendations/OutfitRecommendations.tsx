import React, {useState} from 'react';
import Header from '../../components/header/Header'; // Header 컴포넌트의 경로를 맞게 설정하세요
import Uploader from "../../components/Uploader/Uploader";
import * as style from './Outfit RecommendationsStyle'; // 스타일 경로를 맞게 설정하세요

const OutfitRecommendations: React.FC = () => {

    return (
        <div>
            <Header text="코디추천" /> {/* 헤더에 텍스트 전달 */}
            <Uploader width={310} height={466}>
                <Uploader.Clothes
                    buttonText={'아이템 등록하기'}
                    onClothesChange={(clothes:string)=>{}}
                    />
            </Uploader>
        </div>
    );
};

export default OutfitRecommendations;
