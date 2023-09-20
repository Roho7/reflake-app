import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AuthProvider
          authName="token"
          authType="cookie"
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
          <App />
        </AuthProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
