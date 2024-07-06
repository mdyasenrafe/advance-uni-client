import React from "react";
import { MainLayout, ProtectedRoute } from "./components/layout";

export const App = () => {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
};
