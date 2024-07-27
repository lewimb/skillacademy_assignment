// TODO: answer here
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-page">
        <h1>404 Not Found</h1>
        <Button
          data-testid="back"
          type="button"
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ke halaman sebelumnya
        </Button>
      </div>
    </>
  );
};

export default NotFound;
