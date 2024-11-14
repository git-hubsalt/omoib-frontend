import React, { useState } from 'react';
import * as style from './style';

interface TabProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const TabComponent: React.FC<TabProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(index);
    onTabChange(tab); // 부모 컴포넌트에 선택된 탭을 전달
  };

  return (
    <style.TabLayout>
      {tabs.slice(0, 2).map((tab, index) => (
        <style.TabButton
          key={tab}
          active={activeTab === index}
          onClick={() => handleTabClick(tab, index)}
        >
          {tab}
        </style.TabButton>
      ))}
    </style.TabLayout>
  );
};

export default TabComponent;