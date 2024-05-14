'use client';

import Image from "next/image";
import FileUpload from "../components/FileUpload";
import Button from "../components/Button"
import TranscribedText from "../components/TranscribedText"
import TranslatedText from "../components/TranslatedText"
import FlexContainer from "../components/FlexContainer"
import { useState } from "react";

export default function Home() {
  
  // let transcribedText = "opaaa";
  const [transcribedText, setTranscribedText] = useState("");

  function onFileUploadSuccess(resultData) {
    console.log("Changing transcribed text with:");
    console.log(resultData);
    setTranscribedText(resultData);
  }

  return (
    <FlexContainer>
      <FileUpload onResponse={onFileUploadSuccess} />
        <TranscribedText textContent={transcribedText} />
        <TranslatedText textForTranslation={transcribedText} />
    </FlexContainer>
  );
}
