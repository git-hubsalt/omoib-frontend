import React, { useState } from 'react';
import * as style from "./TabStyle";

interface TabProps {
  tabs: string[];
}

const TabComponent: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <style.TabLayout>
      {tabs.slice(0, 2).map((tab, index) => (
        <style.TabButton
          key={tab}
          active={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </style.TabButton>
      ))}
    </style.TabLayout>
  );
};

export default TabComponent;
