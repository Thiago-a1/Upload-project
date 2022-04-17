import { IoMdCheckmarkCircle } from 'react-icons/io';
import { uploadedItemProps } from '../../utils/UploadedItemProps';

import { Container, Input } from "./styles"

interface CompleteProps {
  file: uploadedItemProps;
}

export function Complete({file}: CompleteProps) {
  const handleCopyLink = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <Container>
      <IoMdCheckmarkCircle size={35} color="#219653"/>

      <h1>Uploaded Successfully!</h1>

      <div 
        style={{ backgroundImage: `url(${file.url})` }}
      >
      </div>

      <Input>
        <input 
          type="text"
          value={file.url || ''}
        />

        <button onClick={() => handleCopyLink(file.url || '')}>Copy Link</button>
      </Input>
    </Container>
  )
}