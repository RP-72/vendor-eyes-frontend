import React, {useState} from "react";
import "./style.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { setOffset } from "../../../redux/slices/dataSlice";

export default function Dropzone({uploadUrl}) {
  // drag state
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped

  const handleFiles = function(file) {
    console.log(file);
    setFile(file)

  }
  const handleUpload = function() {
    // make an API call to upload the file
    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    // axios.post(uploadUrl, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(response => {
    //   // handle the response
    //   console.log(response);
    // })
    // .catch(error => {
    //   // handle the error
    //   console.log(error);
    // });
    setLoading(true);
    dispatch(setOffset())
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setFile(null)
  }
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  return (
    <div id="file-uploader">
    {
      loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'centre' }}>
          <CircularProgress />
        </Box>
      ) : (
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
          <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
          {
            file ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{display: "flex", alignItems: "center"}}
                >
                  <button onClick={() => setFile(null)}>
                    <CancelIcon /> 
                  </button>
                  {file.name} 
                </div>
                <br />
                <button onClick={handleUpload}>Upload</button>
              </div>
            ) : (
              <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                <div>
                  <p>Drag and drop your file here or</p>
                  <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                </div> 
              </label>
            )
          }
          
          { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
      )
    }
    </div>

  );
};