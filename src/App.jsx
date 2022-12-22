import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import WelcomePage from "./components/WelcomePage";

function App() {
  // return <MainPage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/generate-redis/*" element={<MainPage />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
