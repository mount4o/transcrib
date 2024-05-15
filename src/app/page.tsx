'use client';

import FileUpload from "../components/FileUpload";
import TranscribedText from "../components/TranscribedText"
import TranslatedText from "../components/TranslatedText"
import FlexContainer from "../components/FlexContainer"
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
        {!transcribedText && <FileUpload onResponse={onFileUploadSuccess} /> }
        {transcribedText && <TranscribedText textContent={transcribedText} />}
        {transcribedText && <TranslatedText textForTranslation={transcribedText} />}
      </div>
  );
}
