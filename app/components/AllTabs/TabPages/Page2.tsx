import React from "react"
import Image from "next/image"
import "./PageStyle.css"
const Page1 = () => {
    return (
        <div className="present-wrapper">
            <p className="present-title">선물을 골라주세요!</p>
            <div className="present-picker">
                <ul className="present-picker-ul">
                    <li>h1</li>
                    <li>h2</li>
                    <li>h3</li>
                </ul>
            </div>
        </div>
    );
  };

export default Page1