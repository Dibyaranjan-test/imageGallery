import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";

function Search(props) {
  var [imageList, setImageList] = useState([]);
  const seData = useRef("null");
  const onClickHandler = () => {
    setImageList([]);
    fetch(
      "https://pixabay.com/api/?key=10207592-18444c5224af2f062447ad158&q=" +
        seData.current.value
    )
      .then((data) => data.json())
      .then((re) => {
        re.hits.map((res) => {
          setImageList((prevImageList) => [...prevImageList, res.userImageURL]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    props.search(imageList);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Image"
        className="search-bar"
        ref={seData}
      />
      <SearchIcon className="search-icon" onClick={onClickHandler} />
    </div>
  );
}

export default Search;
