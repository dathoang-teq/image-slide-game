import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Is from "./pages/Is";
import New from "./pages/New";
import Thing from "./pages/Thing";
import This from "./pages/This";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/this" element={<This />} />
        <Route path="/is" element={<Is />} />
        <Route path="/new" element={<New />} />
        <Route path="/thing" element={<Thing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
