import React, { memo, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import CameraWrapper from './camera/camera-wrapper';
import UploadImage from './UploadImage';

// let {REACT_APP_API_URL:API_URL} = process.env;
// API_URL = "http://" + API_URL +":5000";
// const {REACT_APP_HOST, REACT_APP_PORT} = process.env;
const API_URL = 'api'
console.log(process.env)
// const API_URL = "http://" + REACT_APP_HOST + ":" +  REACT_APP_PORT;
export default memo(function Dashboard({ formOpen, setFormOpen }) {
  const [images, setImages] = useState([]);
  function handleUpload(files) {
    const formData = new FormData()

    Array.from(files).forEach((file, i) => {
      formData.append('image' + i, file)
    });
    fetch(`${API_URL}/files`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        const names = res.data.map(item=>item["filename"])
        debugger;
        setImages([...images, ...res.data]);
        setFormOpen(false);
      });
  }
  return (
    <Grid>
      <Grid.Column width={10}>{images && !!images.length ? <ImageThumb images={images} /> : null}</Grid.Column>
      <Grid.Column width={6}>
        <CameraWrapper handleUpload={(files)=>handleUpload(files)}/>
        <UploadImage formOpen={formOpen} setFormOpen={setFormOpen} handleUpload={handleUpload} />
      </Grid.Column>
    </Grid>
  );
});

const ImageThumb = ({ images }) => {
  return (
    <>
      {images.map(({filename, detected_filename, prediction}) => {
        const label = prediction && prediction.displayNames && prediction.displayNames[0];
        return (
        // <img src={URL.createObjectURL(image)} alt={image.name} />
        <div><img src={`${API_URL}/files/${filename}`} alt={detected_filename} style={{width : '100%'}} />
        <p>{label}</p></div>
        
      )})}
    </>
  );
};
