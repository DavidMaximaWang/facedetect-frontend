import React, { useState,memo } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import {Camera} from './camera';

function CameraWrapper({handleUpload }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();
  
  const handleClick = ()=>{
    setIsCameraOpen(!isCameraOpen);
    // if(setIsCameraOpen){
    //   setCardImage(undefined);
    // }
  };
  return (
    <>
    <Segment basic textAlign={'left'}>
      <Button onClick={handleClick}>{!isCameraOpen? "Open Camera":"Close Camera"}</Button>
      </Segment>
      
      {isCameraOpen && <Camera onCapture={(blob) => {setCardImage(blob);
      handleUpload([new File([blob], "a.jpg")])
      }} onClear={() => setCardImage(undefined)} />}
      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img src={cardImage && URL.createObjectURL(cardImage)} alt=""/>
        </div>
      )}
    </>
  );
}
export default memo(CameraWrapper);
