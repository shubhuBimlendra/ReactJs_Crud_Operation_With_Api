import { useState } from "react";
import Create from "./components/create.jsx";
import Read from "./components/Read.jsx";
import Update from "./components/Update.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div class="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/" element={<Read />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
