import { uploadedItemProps } from "../../utils/UploadedItemProps";
import { Container, Progress } from "./styles";

interface LoadingProps {
  file: uploadedItemProps
}

export function Loading({file}: LoadingProps) {
  return (
    <Container>
      <h1>Uploading...</h1>
      <Progress>
        <div style={{ width: `${file.progress}%` }}></div>
      </Progress>
    </Container>
  )
}