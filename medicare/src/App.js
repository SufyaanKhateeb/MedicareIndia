
import "./App.css";
import Location from "./components/pages/Location";
import Service from "./components/pages/Service";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Nav from "./components/pages/pageComp/Nav";
import Footer from "./components/pages/pageComp/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
        <Route path="/location" component={Location} />
        <Route path="/aboutus" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/" exact component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
