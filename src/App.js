import "./App.css";
import Search from "./components/search";
import Grid from "./components/Grid";
import React, { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);
  const searchHandler = (images) => {
    setImageList(images);
  };
  return (
    <React.Fragment>
      <div className="container">
        <Search search={searchHandler} />
      </div>
      <Grid images={imageList} />
    </React.Fragment>
  );
}

export default App;
