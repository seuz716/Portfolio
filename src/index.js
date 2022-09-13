import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./PortfolioContainer/hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: { main: "#0CBFAE" }
  }
});

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);


