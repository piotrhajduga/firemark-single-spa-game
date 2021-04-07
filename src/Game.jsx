import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Loader from "./Loader";
import GameLocation from "./GameLocation";
import apiCall from "./api-call";

function callGameApi(action) {
  const gameUrl = "//localhost:8000/api/game/";

  if (action) {
    return apiCall(gameUrl, "PUT", action);
  } else {
    return apiCall(gameUrl);
  }
}

export default function Game(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});

  useEffect(() => {
    callGameApi()
      .then((response) => {
        if (response.ok()) {
          setError(null);
          setLocation(response.json());
        } else {
          setLocation({});
          setError("sum ting wong");
        }
      })
      .catch((response) => {
        setLocation({});
        setError("sum ting wong");
      })
      .then(() => setLoading(false));
  }, []);

  async function handleAction(action) {
    setLoading(true);
    callGameApi(action)
      .then(setLocation)
      .then(() => setLoading(false));
  }

  const alert = <Alert variant="danger">{error}</Alert>;
  const gameLocation = (
    <GameLocation
      onAction={(action) => handleAction(action)}
      location={location}
    />
  );

  return (
    <Container fluid className="text-light bg-dark h-100 w-100 top-box">
      <Row className="h-100 w-100 pt-3 gx-2">
        <Col>
          <Loader className="text-light" loading={loading}>
            {error ? alert : gameLocation}
          </Loader>
        </Col>
      </Row>
    </Container>
  );
}
