import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionProvider from "./contexts/SessionProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SessionProvider>
      <App />
    </SessionProvider>
  </BrowserRouter>
);
