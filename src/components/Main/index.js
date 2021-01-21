import React, { useEffect, useState } from "react";

import fetch from "node-fetch";

import BookContainer from "./BookContainer";
// import Loader from "../../common/Loader";

const Search = (props) => {
  const [displayData, setDisplayData] = useState();

  useEffect(() => {
    // getData(props.search)
    const fetchAportControler = new AbortController();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.search}`, {
      signal: fetchAportControler.signal,
    })
      .then((res) => res.json())
      .then(handelData)
      .then(
        setDisplayData
        // console.log
        )
      .catch(console.error);
    return () => {
      fetchAportControler.abort();
    };
  }, [props.search]);

  const handelData = (data) => {
    return data.items.map((item) => ({
      name: item.volumeInfo.title,
      image_url: (item.volumeInfo.imageLinks.thumbnail?item.volumeInfo.imageLinks.thumbnail:"#"),
      description: (item.volumeInfo.description?item.volumeInfo.description.slice(0, 270):"#"),
      url: item.volumeInfo.infoLink,
      rating: item.volumeInfo.averageRating,
    }));
  };

  return (
    <div className="searchResult main">
      {/* <h1>s;adlaksjfkdjflksdlkfsldkflsdf</h1> */}
      {/* {isLoaded && q && !error ? ( */}
        <BookContainer searchResult={displayData} />
      {/* ) : (
        <Loader />
      )} */}
    </div>
  );
};

export default Search;
