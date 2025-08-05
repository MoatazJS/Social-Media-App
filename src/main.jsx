import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import AuthContextProvider from "./contexts/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HeroUIProvider>
  </StrictMode>
);
