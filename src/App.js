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
  // const [user, setUser] = useState(null);
  // const [pic, setPic] = useState(null);

  // async function getUsers() {
  //   try {
  //     const response = await fetch("http://localhost:3001/users");
  //     const json = await response.json();
  //     setUser(json);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // }

  // async function getPictures() {
  //   try {
  //     const response = await fetch("http://localhost:3001/photos");
  //     const json = await response.json();
  //     setPic(json);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   getPictures();
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Photos />} />
          <Route path="create" element={<CreatePhoto />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> // TODO: replace this
  );
};

export default App;
