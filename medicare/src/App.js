import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://medicareind-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
