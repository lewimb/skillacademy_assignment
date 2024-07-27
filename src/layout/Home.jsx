import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("user");
    navigate("/signin");
  }

  return (
    <div className="page">
      <div className="sidebar">
        <div className="menu-wrap">
          <Button className="btn" type="button" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            className="btn"
            type="button"
            onClick={() => navigate("/create")}
          >
            Create
          </Button>
        </div>
        <Button className="btn" type="button" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
