import React from "react";

const DataCard = ({key,hospital}) => {
  return (
    <div className="dataCardcontainer">
      <div class="card  w-75 m-auto" >
        <div class="card-header">{hospital[3]}</div>
        <div class="card-body">
          <h5 class="card-title">treatment/service</h5>
          <p class="card-text">
            location
          </p>
          <a href="/" class="btn btn-primary">
            link to details
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
