import React, { memo, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import CameraWrapper from './camera/camera-wrapper';
import UploadImage from './UploadImage';

const API_URL = "http://localhost:5000"
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
      {images.map(({filename, prediction}) => {
        const label = prediction.displayNames[0];
        return (
        // <img src={URL.createObjectURL(image)} alt={image.name} />
        <div><img src={`${API_URL}/files/${filename}`} alt={filename} style={{width : '100%'}} />
        <p>{label}</p></div>
        
      )})}
    </>
  );
};
