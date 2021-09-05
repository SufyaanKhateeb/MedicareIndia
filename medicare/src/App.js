import { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Nav from "./components/pages/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Nav />
    <Home/>
    <Router>
          <Route path="/about" component={Location} />
          <Route path="/users" component={Nav} />
          <Route path="/" exact component={Home} />
    </Router>
    </div>
  );
}
