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
    <div className="flex flex-col gap-4 w-full">
      <Dropzone onFilesDrop={onFilesDrop} className="bg-lime-200 w-full rounded-full border-lime-400 border-solid">
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone
        onFilesDrop={onFilesDrop}
        className="bg-primary-200 border-sm border-none  h-[200px] flex justify-center items-center"
      >
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone
        onFilesDrop={onFilesDrop}
        className="bg-transparent border border-neutral-400 border-solid"
        activeClassName="bg-neutral-200"
      >
        <h2>Drop your files here</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
      <Dropzone onFilesDrop={onFilesDrop} disabled>
        <h2>I am disabled!</h2>
        {files.length === 0 ? <h3>No files to upload</h3> : <h3>Files to upload: {files.length}</h3>}
        <FileList files={files} setFiles={setFiles} />
      </Dropzone>
    </div>
  )
};
export default DropzoneComponent;
`;
export default code;
