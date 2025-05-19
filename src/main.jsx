import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import NavBar from "./Components/NavBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </StrictMode>
);
