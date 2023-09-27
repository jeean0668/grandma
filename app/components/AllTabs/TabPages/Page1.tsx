import React from "react"
import Image from "next/image"
import "./PageStyle.css"
import {prefix} from "../../../../config/config";
const Page1 = () => {
    return (
        <div className="letter-wrapper">
           
            {/* First tab content will go here */}
            <p className="letter-title">할머니의 생신을 축하드립니다!</p>
            <div className="letter">
            <Image src= {`${prefix}/letter.jpeg`} alt="birthday letter" width={400} height={400}></Image>
            </div>
      </div>
    );
  };

export default Page1