import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    fullname: "",
    desc: "",
    profilePic: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleNavigation() {
    navigate("/signin");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();
    const payload = {
      id,
      ...input,
    };
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("");
      }

      localStorage.setItem("user", JSON.stringify(payload));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
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
            <FormLabel>Username</FormLabel>
            <Input
              data-testid="username"
              type="text"
              variant="outline"
              name="username"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              data-testid="password"
              type="password"
              variant="outline"
              name="password"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Fullname</FormLabel>
            <Input
              data-testid="fullname"
              type="text"
              variant="outline"
              name="fullname"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              data-testid="description"
              type="text"
              variant="outline"
              name="desc"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Profile Picture</FormLabel>
            <Input
              data-testid="profile-picture"
              type="text"
              variant="outline"
              name="profilePic"
              onChange={handleInputChange}
            />
          </FormControl>
          <Button data-testid="register-button" type="submit">
            Register
          </Button>
          <Button
            data-testid="signin-button"
            type="button"
            onClick={handleNavigation}
          >
            Sign in
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
