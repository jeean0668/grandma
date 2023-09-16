import React from "react";
import "./TabStyle.css";

const TabLogo = ({activeTab} : any) => {

    if(activeTab == "tab1"){
        return <LogoContent>📷Photo</LogoContent>
    } else if (activeTab == "tab2"){
        return <div className="TabLogo">Present</div>
    } else if (activeTab == "tab3"){
        return <div className="TabLogo">Cameras</div>
    } else {
        return null; 
    }
};

const LogoContent = ({children} : any) =>{
    return (
        <div>{children}</div>
    )
};

export default TabLogo;