import React, { useState } from "react";
import TabNavItem from "./TabNavItems";
import TabContent from "./TabContents";
import Page1 from "./AllTabs/TabPages/Page1"; 
import Page2 from "./AllTabs/TabPages/Page2"; 
import Page3 from "./AllTabs/TabPages/Page3"; 
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="편지" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="선물" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="카메라" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Page1></Page1>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Page2></Page2>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Page3></Page3>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;