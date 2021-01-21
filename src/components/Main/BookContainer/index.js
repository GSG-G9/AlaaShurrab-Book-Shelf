import React from "react";

import Card from "./InfoCard";

const BookContainer = (props) => {
  const { searchResult } = props;
  console.log(searchResult);
  return (
    <div className="container">
      {searchResult ? (
        searchResult.map((item) => {
          return (
            <Card
              name={item.name}
              des={item.description}
              image_url={item.image_url}
              rating={item.rating}
              url={item.url}
            />
          );
        })
      ) : (
        <h1>There is no data</h1>
      )}
    </div>
  );
};

export default BookContainer;
