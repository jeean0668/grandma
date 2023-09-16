import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Photo.css";

const Photo = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef) {
      const imageSrc = webcamRef.current?.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);
  return (
    <div className="wrapper ">
      <span className="title py-20">📷Photo</span>
      <div className="py-10 flex flex-col items-center space-y-4">
        <span className="font-kangwon-bold text-lg">
          생일 기념 사진을 찍어보세요! (사진은 우클릭으로 저장 가능합니다.)
        </span>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button className="photo-button" onClick={capture}>
          📷
        </button>
      </div>

      {imgSrc && (
        <div className = "photo-result-wrapper">
            <div className = "photo-result">
                <img src={imgSrc} />
            </div>
            <span className="photo-result-text">
              2022. 9. 28. 생일 기념 단체 샷🎉
            </span>
        </div>
        )}
    </div>
  );
};

export default Photo;