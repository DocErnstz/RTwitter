import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import React from "react";
import "./TwSections/styles/main.css";
import "./TwSections/styles/optionsBar.css";
import "./TwSections/styles/homeBar.css";
import "./TwSections/styles/infoBar.css";
import "./TwSections/styles/tweet.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
