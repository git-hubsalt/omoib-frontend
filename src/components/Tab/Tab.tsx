import React, { useState } from 'react';
import * as style from "./TabStyle";

// TabComponent에 props로 탭 이름을 받을 수 있도록 수정
interface TabProps {
    tabs: string[]; // 여러 개의 탭 이름을 받음
}

const TabComponent: React.FC<TabProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]); // 첫 번째 탭을 기본값으로 설정

    return (
        <style.TabContainer>
            {tabs.map((tab) => (
                <style.TabButton
                    key={tab}
                    active={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </style.TabButton>
            ))}
        </style.TabContainer>
    );
};

export default TabComponent;