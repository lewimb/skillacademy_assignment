import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const CreatePhoto = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: nanoid(),
    caption: "",
    url: "",
    userid: JSON.parse(localStorage.getItem("user")).id,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(data);
      const response = await fetch("http://localhost:3001/photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("");
      }
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="create-photo-page">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Photo</FormLabel>
            <Input
              data-testid="photo-url"
              type="text"
              onChange={handleChange}
              name="url"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Caption</FormLabel>
            <Textarea
              data-testid="caption"
              onChange={handleChange}
              name="caption"
            />
          </FormControl>
          <Button data-testid="upload-button" type="submit">
            Upload
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreatePhoto;
