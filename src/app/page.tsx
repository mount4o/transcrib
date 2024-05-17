'use client';

import FileUpload from "../components/FileUpload";
import TranscribedText from "../components/TranscribedText"
import TranslatedText from "../components/TranslatedText"
import Head from 'next/head'
import { useState, useEffect } from "react";
import Hotjar from '@hotjar/browser';
import TagManager from "react-gtm-module";


export default function Home() {
  const [transcribedText, setTranscribedText] = useState("");

  useEffect(() => {
    const siteId = 4985123;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion);

    const gtmId = "AW-16570343427";
    TagManager.initialize({ gtmId });
  }, []);

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
