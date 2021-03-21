import React, { memo, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default memo(function UploadImage({ formOpen, setFormOpen, handleUpload }) {
  const [files, setFiles] = useState([])
  const handleOnchange = (e, uploadedFiles)=>{
    setFiles([...uploadedFiles])
  }

  return (
    <>
      <Segment basic textAlign={'left'}>
        <Button
          onClick={() => {
            setFormOpen(!formOpen);
          }}
        >
          Upload an image
        </Button>
      </Segment>

      {formOpen ? (
        <Segment clearing>
          <Form>
            <Form.Field>
              {/* <input type='file' id='single' onChange={(e)=>handleUpload(e, e.target.files)} placeholder='Upload an image' /> */}
              <input type='file' id='single' onChange={(e)=>handleOnchange(e, e.target.files)} placeholder='Upload an image' />
            </Form.Field>

            <Button onClick={() => {setFormOpen(false); handleUpload(files)}} type='submit' floated='right' positive content='Upload' />
            <Button onClick={() => {setFormOpen(false);}} type='submit' floated='right' content='Cancel' />
          </Form>
        </Segment>
      ) : null}
    </>
  );
});
