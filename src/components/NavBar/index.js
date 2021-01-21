import React, { useEffect, useState } from "react";

const NavBar = (props) => {
  const [input, setInput] = useState("The Rising of the Shield Hero");

  const addInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    props.changeSearchInput(input);
  }, [input, props]);

  return (
    <nav>
      <input
        type="text"
        className="search-input"
        placeholder="Search here ..."
        onChange={addInput}
      ></input>
      <button className="search">Search</button>
    </nav>
  );
};

export default NavBar;
