import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import BcgBlueLightLeft from "./components/BcgBlueLightLeft.jsx";
import BcgBlueLightRight from "./components/BcgBlueLightRight.jsx";
import DotContainerComponent from "./components/DotsContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BcgBlueLightLeft />
    <DotContainerComponent />
    <App />
    <BcgBlueLightRight />
  </StrictMode>
);
