import React from 'react';
import { useState } from "react";

const PhotoUploader = ({handleChange}) => {
    const [file, setFile] = useState(null);
    
  
    return (
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ width: '160px', height: '160px', border: '1px solid lightgray', borderRadius: '10px'}}
      >
        {file ? (
          <img src={URL.createObjectURL(file)} alt="uploaded" style={{ width: '100%', height: '100%',borderRadius: '10px' }} />
        ) : (
          <img src='https://static.thenounproject.com/png/49665-200.png' alt='drop here'/>
        )}
      </div>
    );
  
    function handleDrop(event) {
      event.preventDefault();
      const droppedFile = event.dataTransfer.files[0];
      setFile(droppedFile);
      const img_url = URL.createObjectURL(droppedFile)
      handleChange({target:{name:'avatar',value:img_url}})
    }
  
    function handleDragOver(event) {
      event.preventDefault();
    }
  }
  
  export default PhotoUploader