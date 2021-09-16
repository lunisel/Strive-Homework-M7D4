import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavouritesAction, setUserAction } from "../../actions";

const mapStateToProps = (state) => ({
  email: state.user.email,
  favourite: state.user.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (email) => dispatch(setUserAction(email)),
  removeFavourites: (index) => dispatch(removeFromFavouritesAction(index)),
});

const Profile = (props) => {
  const [email, setEmail] = useState("");
  return (
    <>
      {props.email ? (
        <Container>
          <div className="profile-top-container">
            <h1>Your Favourites</h1>
            <p>{props.email}</p>
            <Row>
              {props.favourite?.map((j, i) => (
                <Col md={4} className="card p-2" key={i}>
                  <h3>{j.title}</h3>
                  <p>{j.company_name}</p>
                  <Button
                    variant="danger"
                    onClick={() => {
                      props.removeFavourites(i);
                      alert("Removed!");
                    }}
                  >
                    Remove
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center">
          <div className="login-cont">
            <h1>Write your email here</h1>
            <Form.Control
              type="text"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="my-2"
            />
            <Button onClick={() => props.setUser(email)} className="mt-3">
              Submit
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
