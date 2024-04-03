import React from "react";
import { Navigation } from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PokemonPage, SeachPage } from "./pages";

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
