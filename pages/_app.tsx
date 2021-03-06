import "../styles/globals.css";
import "../styles/index.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import React from "react";
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Form from "../components/form/formTweet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Form />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
