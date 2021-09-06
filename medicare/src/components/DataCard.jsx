import React from "react";

const DataCard = ({ hospital }) => {
  return (
    <div className="dataCardcontainer d-inline">
      <div className="card" style={{ width: "18rem", minHeight: "250px" }}>
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}
        >
          <h5 className="card-title">{hospital[2]}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{hospital[4]}</h6>
          <span className="card-city">{hospital[1]}, {hospital[0]}</span>
          <span className="card-text"></span>
          <span>
            <h4 className="card-rating">{hospital[12]}/10</h4>
          </span>
          <a href="#" className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
