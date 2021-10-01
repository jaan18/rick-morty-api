import React from "react";

export const Carousel = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
