import { useState } from "react";
import { Row, Card, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaComments } from "react-icons/fa";
import _ from "lodash";

export const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/chat");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <section className="pb-4 d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <FaComments
              style={{
                color: "#0d6efd",
                width: "3rem",
                height: "3rem",
                paddingRight: "1rem",
              }}
            />
            <h1 className="d-inline">
              <em>Stay Connected!</em>
            </h1>
          </div>
        </section>
        <Card style={{ width: "25rem", boxShadow: "1rem" }}>
          <Card.Body>
            <Card.Title className="pb-2">Login</Card.Title>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <Form.Control
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-2"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={_.isEmpty(user.email) || _.isEmpty(user.password)}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
