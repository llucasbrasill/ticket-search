import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketPage from "../pages/TicketPage";

const index = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="/:id" element={<TicketPage />} />
      </Routes>
    </BrowserRouter >
  );
};

export default index;