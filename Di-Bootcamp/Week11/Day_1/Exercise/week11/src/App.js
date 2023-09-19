import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeScreen from "./copmonent/HomeScreen";
import ProfileScreen from "./copmonent/PrifileScreen";
import ShopScreen from "./copmonent/ShopScreen";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ErrorBoundary from "./copmonent/ErrorBoundary";
import PostList from "./copmonent/PostList";
import Example1 from "./copmonent/Example1";
import Example2 from "./copmonent/Example2";
import Example3 from "./copmonent/Example3";

const add = async () => {
  try {
    const res = await fetch(
      "https://webhook.site/3ced7047-7786-47f1-af07-a4be9c06923b",
      {
        method: "POST",
        headers: {
          "COntent-type": "application/json",
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
        }),
      }
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
const send = () => {
  add();
};

function App() {
  return (
    <div className="App">
      <button onClick={send}>Press me to post some data</button>
      {/* <Example1 /> */}
      {/* <Example2 /> */}

      {/* <PostList /> */}
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="links" to="/">
              Home
            </NavLink>
            <NavLink className="links" to="/profile">
              profile
            </NavLink>
            <NavLink className="links" to="/shop">
              shop
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            </>
          }
        />
      </Routes> */}
    </div>
  );
}

export default App;
