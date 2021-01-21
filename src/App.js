import "./App.css";
// import { Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("The Rising of the Shield Hero");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const changeSearchInput = (newInput) => {
    setSearch(newInput);
  };

  return (
    <div className="App">
      <NavBar changeSearchInput={changeSearchInput} />
      <Main search={search} />
      {/* <h1>welcome to My Book Shilf</h1>
      <p>
        Here you can search for any book you want easly<br></br>Have fun
      </p> */}
    </div>
  );
}

export default App;
