import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Photos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalImages = images.length;

  const userData = JSON.parse(localStorage.getItem("user"));
  async function getUsers() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/photos?userId=${userData.id}`
      );
      if (!response.ok) throw new Error("cannot fetch data");
      const json = await response.json();
      setImages(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="photos-page">
      <div className="user-detail-container">
        <Image src={userData.profilePic} className="profile-pic" />
        <div className="user-data">
          <p className="username">{userData.username}</p>
          <p className="total-post">
            <b>{totalImages}</b> Posts
          </p>
          <p className="fullname">{userData.fullname}</p>
          <p className="desc">{userData.desc}</p>
        </div>
      </div>
      <div className="photo-post">
        {images.map((value) => (
          <li key={value.id}>
            <Link to={`photo/${value.id}`}>
              <Image
                className="photo-loading-template"
                src={value.url}
                alt={value.caption}
              />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Photos;
