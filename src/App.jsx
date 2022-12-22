import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/GeneratePage";
import WelcomePage from "./components/WelcomePage";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "MonoplexKR-Regular,Segoe UI, Roboto, sans-serif ",
      textTransform: "none",
    },
  },
});
function App() {
  // return <MainPage />;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/generate-redis/*" element={<MainPage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
