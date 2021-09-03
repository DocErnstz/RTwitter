import "../styles/globals.css";
import "../styles/index.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import React from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false //
import Form from "../components/form/formTweet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Form />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
