import React from "react";
import { Routes, Route } from "react-router-dom";

import Unauthorised from "../../pages/404/Unauthorised";

//Import All Components
import * as Pages from "./Pages";

const OptimizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="*" element={<Unauthorised />} />
      <Route path="/welcome-from-ceo" element={<Pages.WelcomeFromCEO />} />
      <Route path="/about" element={<Pages.AboutUs />} />
      <Route path="/history" element={<Pages.History />} />
      <Route path="/plants" element={<Pages.Plants />} />
    </Routes>
  );
};

export default OptimizedRoutes;
