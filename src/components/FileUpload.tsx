"use client";

import React, {useState} from 'react';
import axios from 'axios';
import Button from "../components/Button"
import FlexContainer from "../components/FlexContainer"

export default function FileUpload({ onResponse }: any) {
  const [file, setFile] = useState(new File([""], ""));

  function handleChange(event: any) {
    setFile(event.target.files[0]);
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
        if (response && response.data && response.data.transcribedText) {
          onResponse(response.data.transcribedText);
        }
    });
  }

  return (
    <FlexContainer>
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <input type="file" onChange={handleChange}/>
        <Button inputType={"submit"} text={"Transcribe"} />
      </form>
    </FlexContainer>
  )
}
