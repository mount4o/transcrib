"use client";

import React, {useState} from 'react';
import axios from 'axios';
import Button from "../components/Button"
import FlexContainer from "../components/FlexContainer"
import Spinner from "../components/Spinner"

export default function FileUpload({ onResponse }: any) {
  const [file, setFile] = useState(new File([""], ""));
  const [isTranscribing, setIsTranscribing] = useState(false);

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  function onDragOver(e: any) {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Backend host:");
    console.log(process.env.NEXT_PUBLIC_BACKEND_HOST);
    const url = process.env.NEXT_PUBLIC_BACKEND_HOST + '/transcribeFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    setIsTranscribing(true);
    axios.post(url, formData, config)
      .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
      })
      .then((response) => {
        setIsTranscribing(false);
        if (response && response.data && response.data.transcribedText) {
          onResponse(response.data.transcribedText);
        }
    });
  }

  return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-10/12">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload audio file</label>
        <div onDragOver={onDragOver} onDrop={handleDrop}  className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  {!file.name && (
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  )}
                  {file.name && (
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{file.name}</span></p>
                  )}
                  {!file.name && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">MP3 only (preferably bellow 8MB)</p>
                  )}
              </div>
              <input onChange={handleChange} id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      {isTranscribing ? (<div className="flex flex-row"><p>This might take some time...</p><Spinner /></div>) : (<Button inputType={"submit"} text={"Transcribe file"} />)}
      </form>
  )
}
