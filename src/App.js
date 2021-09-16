import NavBar from "./components/Navbar.jsx";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import Search from "./components/Homepage/Search.jsx";
import CategoryMain from "./components/Categories/CategoryMain.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Details from "./components/DetailPage/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="cont-header">
        <Link to="/">
          <h1>Search Jobs</h1>
        </Link>
      </div>
      <NavBar/>

      <Route path="/" exact render={(routerProps)=> <Homepage {...routerProps}/>}/>
      <Route path="/search" exact render={(routerProps)=> <Search {...routerProps}/>}/>
      <Route path="/category/:name" render={(routerProps)=> <CategoryMain {...routerProps}/>}/>
      <Route path="/profile" exact render={(routerProps)=> <Profile {...routerProps}/>}/>
      <Route path="/details/:id" render={(routerProps)=> <Details {...routerProps}/>}/>
    </BrowserRouter>
  );
}

export default App;
