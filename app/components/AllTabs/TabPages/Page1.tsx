import React from "react"
import Image from "next/image"
import "./PageStyle.css"
import {prefix} from "../../../../config/config";
import letterImage from "./letter.jpeg";
const Page1 = () => {
    return (
        <div className="letter-wrapper">
           
            {/* First tab content will go here */}
            <p className="letter-title">할머니의 팔순을 축하드립니다!</p>
            <div className="letter">
            {/* <Image src= '/grandma/letter.jpeg' unoptimized alt="birthday letter" width={400} height={400}/> */}
            <Image src= {letterImage} unoptimized alt="birthday letter" width={400} height={400}/>
            </div>
      </div>
    );
  };

export default Page1