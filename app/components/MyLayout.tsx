'use client'
import Header from "../pages/Myheader"
import Image from 'next/image'
import LogoImage from '../mainpage'
import Tabs from './Tabs'
import "./AllTabs/TabStyle.css"

const layoutStyle = {
  display : "flex",
  justifyContent : "center"
}; 

const backgroundStyle = {
  width : "100%",
}

function Layout(props:any) {
  return (
    <div style = {backgroundStyle}>
      <div style = {layoutStyle}>  
        {/* server side */}
        <LogoImage src = "/birthday.png" alt = "birthday logo"  width={200} height = {100}/>
      </div>
      <div style = {layoutStyle}>
        {/*tab */}
        <Tabs/>
      </div>
    </div>
  )
};

export default Layout