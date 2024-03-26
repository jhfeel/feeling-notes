import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import SessionProvider from "./contexts/SessionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
