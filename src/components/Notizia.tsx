import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/INotizia";

const Notizia = ({ imageUrl, title, newsSite, id }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{newsSite}</Card.Text>
        <Button onClick={() => navigate(`/detail/${id}`)} variant="primary">
          Discover more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notizia;
