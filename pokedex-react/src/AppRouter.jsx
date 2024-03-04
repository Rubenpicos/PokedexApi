import React from "react";
import { Navigation } from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, SeachPage } from "./pages"; //By doing that, I have all 3 addresses in one. It's on the "route"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SeachPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
