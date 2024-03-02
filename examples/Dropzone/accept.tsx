const code = `
import { Dropzone, FileList} from "pol-ui";
import React,{useState} from "react";

const DropzoneComponent = () => {
  const [files, setFiles] = useState<File[]>([])
  // Create handler for dropzone's onFilesDrop:
  const onFilesDrop = useCallback(
    (newFiles: File[]) => {
      setFiles([...files, ...newFiles])
    },
    [files],
  )

  return (
    <Dropzone onFilesDrop={onFilesDrop} multiple={false} accept=".pdf">
    <h2>You can only import PDFs here</h2>
    <FileList files={files} setFiles={setFiles} />
  </Dropzone>
  )
};
export default DropzoneComponent;
`;
export default code;
