import React, { useState,FC } from 'react';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const DocumentUploader: FC = () => {
 const [document, setDocument] = useState<File | null>(null);

 const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
   setDocument(event.target.files[0]);
  }
 };
 const inputId = `upload-document-${Math.random()}`;
 return (
  <div>
   <input
    style={{ display: 'none' }}
    type="file"
    id={inputId}
    onChange={handleDocumentChange}
   />
   <label htmlFor={inputId}>
    <IconButton component="span">
     <AttachFileIcon />
    </IconButton>
   </label>
   <span>{document ? document.name : "Выберите файл"}</span>
  </div>
)
};

export default DocumentUploader;
