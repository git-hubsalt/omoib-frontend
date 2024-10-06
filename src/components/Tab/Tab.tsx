import React, { useState } from 'react';
import * as style from "./TabStyle";

interface TabProps {
    tabs: string[];
}

const TabComponent: React.FC<TabProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <style.TabContainer>
            <style.SliderWrapper>
                <style.Slider activeTab={activeTab} />
            </style.SliderWrapper>
            {tabs.map((tab, index) => (
                <style.TabButton
                    key={tab}
                    active={activeTab === index}
                    onClick={() => setActiveTab(index)}
                >
                    {tab}
                </style.TabButton>
            ))}
        </style.TabContainer>
    );
};

export default TabComponent;
