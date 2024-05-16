'use client';

import FileUpload from "../components/FileUpload";
import TranscribedText from "../components/TranscribedText"
import TranslatedText from "../components/TranslatedText"
import FlexContainer from "../components/FlexContainer"
import Head from 'next/head'
import { useState } from "react";

export default function Home() {
  const [transcribedText, setTranscribedText] = useState("");

  function onFileUploadSuccess(resultData : any) {
    console.log("Changing transcribed text with:");
    console.log(resultData);
    setTranscribedText(resultData);
  }

  return (
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        {!transcribedText && <FileUpload onResponse={onFileUploadSuccess} /> }
        {transcribedText && <TranscribedText textContent={transcribedText} />}
        {transcribedText && <TranslatedText textForTranslation={transcribedText} />}
      </div>
  );
}
