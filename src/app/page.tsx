'use client';

import FileUpload from "../components/FileUpload";
import TranscribedText from "../components/TranscribedText"
import TranslatedText from "../components/TranslatedText"
import Head from 'next/head'
import Script from 'next/script';
import { useState, useEffect } from "react";
import Hotjar from '@hotjar/browser';

export default function Home() {
  const [transcribedText, setTranscribedText] = useState("");

  useEffect(() => {
    const siteId = 4985123;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  function onFileUploadSuccess(resultData : any) {
    console.log("Changing transcribed text with:");
    console.log(resultData);
    setTranscribedText(resultData);
  }

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16570343427"></Script>
      <Script id="gtm" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16570343427');
        `}
      </Script>
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        {!transcribedText && <FileUpload onResponse={onFileUploadSuccess} /> }
        {transcribedText && <TranscribedText textContent={transcribedText} />}
        {transcribedText && <TranslatedText textForTranslation={transcribedText} />}
      </div>
    </>
  );
}
