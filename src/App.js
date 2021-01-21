import "./App.css";
import { Switch } from "react-router-dom";

// import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>welcome to My Book Shilf</h1>
      <p>
        Here you can search for any book you want easly<br></br>Have fun
      </p>

      <Switch></Switch>
    </div>
  );
}

export default App;
