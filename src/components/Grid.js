import React from "react";
import "./Grid.css";

function Grid(props) {
  return (
    <div className="containers">
      {props.images.map(
        (image) =>
          image && (
            <div className="grid-item">
              <a href={image}>
                <img src={image} alt="Not found" />
              </a>
            </div>
          )
      )}
    </div>
  );
}

export default Grid;
//test1
