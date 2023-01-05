import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/Global";
import { DashProvider } from "./contexts/DashboardContext/DashContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <DashProvider>
        <App />
      </DashProvider>
    </BrowserRouter>
  </React.StrictMode>
);
