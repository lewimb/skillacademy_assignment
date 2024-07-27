import { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Photos from "./routes/Photos";
import CreatePhoto from "./routes/CreatePhoto";
import Detail from "./routes/Detail";
import SignIn from "./routes/SignIn";
import Register from "./routes/Register";
import NotFound from "./routes/NotFound";
import Home from "./layout/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Photos />} />
          <Route path="create" element={<CreatePhoto />} />
          <Route path="photo/:id" element={<Detail />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> // TODO: replace this
  );
};

export default App;
