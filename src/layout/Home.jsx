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
    // <div
    //   style={{
    //     display: "flex",
    //   }}
    // >
    //   <div
    //     style={{
    //       height: "100vh",
    //       width: "280px",
    //       background: "blue",
    //       position: "sticky",
    //       top: "0",
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-between",
    //       padding: "0.5rem",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "0.5rem",
    //       }}
    //     >
    //       <button
    //         style={{
    //           background: "white",
    //           padding: "1rem",
    //         }}
    //       >
    //         Hello
    //       </button>
    //       <button
    //         style={{
    //           background: "white",
    //           padding: "1rem",
    //         }}
    //       >
    //         Hello
    //       </button>
    //     </div>

    //     <button
    //       style={{
    //         background: "white",
    //         padding: "1rem",
    //       }}
    //     >
    //       Hello
    //     </button>
    //   </div>
    //   <Outlet />
    // </div>
  );
};

export default Home;
