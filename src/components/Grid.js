import React from "react";
import "./Grid.css";

function Grid(props) {
  return (
    <div className="containers">
      {props.images.map(
        (image) =>
          image && (
            <div className="imgs" key={props.id}>
              <a href={image}>
                <img src={image} alt="Not found" />
                <div className="description">Checking</div>
              </a>
            </div>
          )
      )}
    </div>
  );
}

export default Grid;
