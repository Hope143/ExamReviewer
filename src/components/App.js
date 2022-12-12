import React from "react";
import ITE from "./ITE4/ite";
import SPI from "./SPI/spi";
import Navigation from "./Navigation";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ITE />}></Route>
          <Route path="/spi" element={<SPI />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
