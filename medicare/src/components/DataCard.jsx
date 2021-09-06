import React,{useState} from "react";
import { useSelector } from 'react-redux';

const DataCard = ({ hospital }) => {
  const [flip,setFlip] = useState(true);
  return (
    
    <div className="dataCardcontainer d-inline">
      {flip ? (<div>
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
            <button className="btn btn-primary" onClick={() => {
              setFlip(!flip);
            }} >
              More
            </button>
          </div>
        </div>
      </div>):(<div>
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
              <h5 className="card-title">Address :</h5>
              <h6 className="card-subtitle mb-2 text-muted">{hospital[5]} <span>{hospital[6]}</span></h6>
              <span className="card-city">{hospital[7]}</span>
              
              <span>
                <h5 className="card-rating"><a target="_blank" href= {`https://${hospital[8]}`} rel="noreferrer">Visit Us</a></h5>
              </span>
              <button className="btn btn-primary" onClick={() => {
                setFlip(!flip);
              }} >
                Less
              </button>
            </div>
          </div>
      </div>)}
      
    </div>
  );
};

export default DataCard;
