import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "react-auth-kit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthProvider
        authName="auth"
        authType="cookie"
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <App />
      </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
