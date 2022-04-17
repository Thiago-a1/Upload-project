import Dropzone, { useDropzone } from 'react-dropzone';

import { Container, DropContainer, Button } from './styles';

import img from '../../assets/image.svg';

interface UploadProps {
  onUpload: (files: any) => void;
}

export function Upload({onUpload}: UploadProps) {
  const { getRootProps, getInputProps } = useDropzone({
    noDrag: true,
    maxFiles: 1,
    accept:"image/*",
    onDropAccepted: onUpload
  });

  return (
    <Container>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png...</p>

      <Dropzone
        noClick
        maxFiles={1}
        accept="image/*"
        onDropAccepted={onUpload}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => 
          <DropContainer 
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />

            <img src={img} alt="upload image" />

            <>
              <span>Drag & Drop your image here</span> 
              <span>4MB limit</span>
            </>
          </DropContainer>
        }
      </Dropzone>

      <span>Or</span>

      <Button {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        Chose a file
      </Button>

    </Container>
  )
}