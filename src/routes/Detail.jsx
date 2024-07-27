import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image, Button } from "@chakra-ui/react";

const Detail = () => {
  const { id } = useParams();
  const [pic, setPic] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  async function getItem() {
    try {
      const response = await fetch(`http://localhost:3001/photos/${id}`);
      const json = await response.json();
      if (!response.ok) throw new Error("Unable to fetch data");
      setPic(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3001/photos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("unnable to fetch data");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="detail-photo-page">
        <Image src={pic.url} alt={pic.caption} />
        <div className="comment">
          <div className="comment-container">
            <Image className="profile-pic" src={userData.profilePic} />
            <div className="comment-text">
              <h3>{userData.username}</h3>
              <p>{pic.caption}</p>
            </div>
          </div>
          <Button type="button" onClick={handleDelete}>
            <Image className="trash" src="/icons/trash-svgrepo-com.svg" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Detail;
