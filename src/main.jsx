import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import "./i18n";

import { LanguageProvider } from "./context/language-context";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
