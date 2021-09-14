import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ThemeProvider } from "./Context/Theme";
import { ProviderLang as LangProvider } from "./Context/Language";
import { BrowserRouter } from "react-router-dom";

import { Provider as AuthProvider } from "./Context/Authentication";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
