import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import React from "react";
import "./TwSections/styles/main.css";
import "./TwSections/styles/optionsBar.css";
import "./TwSections/styles/homeBar.css";
import "./TwSections/styles/infoBar.css";
import "./TwSections/styles/tweet.css";
import "./TwSections/styles/userBar.css";
import "./TwSections/styles/formTweet.css";
import "./TwSections/styles/AuthStyles.css";
import Form from "./TwSections/components/form/formTweet";

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
