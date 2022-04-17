import React, { useState } from 'react'
import filesize from 'filesize';

import api from '../src/services/api';

import { Upload } from './Components/Upload'
import { Loading } from './Components/Loading';
import { Complete } from './Components/Complete';

import { uploadedItemProps } from './utils/UploadedItemProps';

import GlobalStyle from './styles/global';
import { Container } from './styles';


function App() {
  const [uploadedItem, setUploadedItem] = useState<uploadedItemProps>({} as uploadedItemProps);

  const handleUpload = (file: any) => {
    const UploadedFile = {
      file,
      name: file[0].name,
      readableSize: filesize(file[0].size),
      preview: URL.createObjectURL(file[0]),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }

    setUploadedItem(UploadedFile);
    
    processUpload(UploadedFile);
  };
  
  const updateFile = (data: any) => {
    setUploadedItem({...uploadedItem, ...data});
  };

  const processUpload = (uploadedFile: any) => {
    const data = new FormData();

    console.log(uploadedFile.file[0].name);

    data.append('file', uploadedFile.file[0]);
    
    api.post('posts', data, {
      onUploadProgress: e => {
        const progress = Math.round((e.loaded * 100) / e.total);

        updateFile({progress,});
      }
    })
    .then(response => {
      setUploadedItem({
        ...uploadedItem,
        uploaded: true,
        url: response.data.url
      })
    })
    .catch(() => {
      setUploadedItem({
        ...uploadedItem,
        error: true
      })
    })
  };
  
  return (
    <div className="App">
      <Container>
        {!uploadedItem.progress && !uploadedItem.uploaded ? <Upload onUpload={handleUpload} /> : ""}
        {uploadedItem.progress > 0 && uploadedItem.progress < 100 ? <Loading file={uploadedItem} /> : ""}
        {uploadedItem.uploaded ? <Complete file={uploadedItem} /> : ""}
      </Container>
      <GlobalStyle />
    </div>
  )
}

export default App
