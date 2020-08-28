import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketPage from "../pages/TicketPage";


import Teste from "../pages/Search";

const index = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="ticket/:id" element={<TicketPage />} />

        <Route path="teste" element={<Teste />} />
      </Routes>
    </BrowserRouter >
  );
};

export default index;