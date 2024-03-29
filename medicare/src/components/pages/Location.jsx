import React, { useState, useEffect } from "react";
import DataCard from "../DataCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../actions/actions";

const Location = () => {
  const indata = useSelector((state) => state.data);
  const dispatch = useDispatch();
  var flag = 0;
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const [location, setLocation] = useState("");
  const [input, setInput] = useState("");
  return (
    <div
      className="location"
      style={{ minHeight: "100vh", backgroundImage: "url(/img/test1.jpg)" }}
    >
      <div className="search-bar">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  setLocation(input);
                  flag = 0;
                  document.querySelector("#form1").value = "";
                }
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              console.log(indata);
              flag = 0;
              setLocation(input);
              document.querySelector("#form1").value = "";
            }}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="render-container">
        {indata.data.map((hospital, index) => {
          if (
            location.toLowerCase().includes(hospital[1].toLowerCase()) ||
            location.toLowerCase().includes(hospital[0].toLowerCase())
          ) {
            flag = 1;
            return <DataCard key={index} hospital={hospital} />;
          }
        })}
        {flag == 0 && <div />}
        {flag == 0 && <h1 className="nodata">No data found</h1>}
        {flag == 0 && <div />}
      </div>
    </div>
  );
};

export default Location;
