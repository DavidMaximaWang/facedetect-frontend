import React, { memo, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import CameraWrapper from './camera/camera-wrapper';
import UploadImage from './UploadImage';

export default memo(function Dashboard({ formOpen, setFormOpen }) {
  const [images, setImages] = useState([]);
  function handleUpload(files) {
    setImages([...images, ...files]);
    setFormOpen(false);
  }
  return (
    <Grid>
      <Grid.Column width={10}>{images && !!images.length ? <ImageThumb images={images} /> : null}</Grid.Column>
      <Grid.Column width={6}>
        <CameraWrapper handleUpload={(files)=>handleUpload(files)}/>
        <UploadImage formOpen={formOpen} setFormOpen={setFormOpen} handleUpload={(e, files)=>handleUpload(files)} />
      </Grid.Column>
    </Grid>
  );
});

const ImageThumb = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <img src={URL.createObjectURL(image)} alt={image.name} />
      ))}
    </>
  );
};
