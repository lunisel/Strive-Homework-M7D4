import { withRouter, Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import logo from "../assets/briefcase.png";
import { useState } from "react";
import { connect } from "react-redux";
import { setQueryAction } from "../actions";

const mapStateToProps = (state) => ({
  email: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  setQueryRedux: (queryToAdd) => dispatch(setQueryAction(queryToAdd))
});

const NavBar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <>
      {console.log(query)}
      <Navbar bg="light" expand="lg">
        <Container className="nav-cont">
          <Navbar.Brand href="/">
            <img src={logo} alt="briefcase logo" className="img-fluid" />
            Search Jobs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div
                onClick={() => props.history.push("/")}
                className={
                  props.location.pathname === "/"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                Home
              </div>
              <div
                href="/profile"
                onClick={() => props.history.push("/profile")}
                className={
                  props.location.pathname === "/profile"
                    ? "active nav-link"
                    : "nav-link"
                }
              >
                {props.email ? "My Profile" : "Sign-in"}
              </div>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <Link className="category-link" to="/category/business">
                  Business
                </Link>
                <Link
                  className="category-link"
                  to="/category/customer%20Service"
                >
                  Customer Service
                </Link>
                <Link className="category-link" to="/category/data">
                  Data
                </Link>
                <Link className="category-link" to="/category/design">
                  Design
                </Link>
                <Link
                  className="category-link"
                  to="/category/Software%20Development"
                >
                  Software Development
                </Link>
                <Link className="category-link" to="/category/marketing">
                  Marketing
                </Link>
                <Link className="category-link" to="/category/sales">
                  Sales
                </Link>
                <Link
                  className="category-link"
                  to="/category/human%20Resources"
                >
                  Human Resources
                </Link>
                <Link className="category-link" to="/category/writing">
                  Writing
                </Link>
                <Link className="category-link" to="/category/teaching">
                  Teaching
                </Link>
                <Link className="category-link" to="/category/all%20others">
                  All others
                </Link>
              </NavDropdown>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                props.setQueryRedux(query);
              }}
            >
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                onClick={() => {
                  if (props.location.pathname === "/search") {
                    console.log(query);
                  } else {
                    props.history.push("/search");
                  }
                }}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
