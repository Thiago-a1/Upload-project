export interface uploadedItemProps {
  file: any;
  name: string;
  readableSize: string,
  preview: string,
  progress: number,
  uploaded: boolean,
  error: boolean,
  url: null | string
}