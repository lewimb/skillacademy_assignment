import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  background,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState("");

  function handleNavigation() {
    navigate("/register");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function fetchUser(username) {
    const response = await fetch(
      `http://localhost:3001/users?username=${username}`
    );
    if (!response.ok) {
      throw new Error("");
    }
    const [user] = await response.json();
    if (!user) {
      throw new Error("Invalid Username or Password");
    }

    return user;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await fetchUser(input.username);
      if (input.password != user.password) {
        throw new Error("Invalid Username or Password");
      }
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      setErr(err.message);
    }
  }

  return (
    <div
      style={{
        paddingInline: "1.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          border: "1px solid",
          padding: "2rem 1rem",
          marginInline: "auto",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          {err ? (
            <div
              style={{
                background: "pink",
                color: "red",
                padding: "0.25rem",
                marginBottom: "0.5rem",
              }}
            >
              {err}
            </div>
          ) : null}
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            variant="outline"
            onChange={handleInputChange}
            name="username"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            variant="outline"
            name="password"
            onChange={handleInputChange}
          />
        </FormControl>
        <Button type="submit">Sign In</Button>
        <Button type="button" onClick={handleNavigation}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
