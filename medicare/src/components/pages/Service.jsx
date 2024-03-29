import React from "react";
import { useEffect, useState } from "react";
import DataCard from "../DataCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../actions/actions";

const Service = () => {
  const fetchDatain = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // const [fetchData, setFetchData] = useState({ data: [] });
  const [service, setService] = useState("");
  const [price, setPrice] = useState(2000000);
  const [flag, setFlag] = useState(false);
  var flag1 = 0;
  const [category, setCategory] = useState("");
  const [catPage, setCatPage] = useState(true);
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  // useEffect(() => {
  //   fetch("https://medicareind-api.herokuapp.com/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFetchData(data);
  //       console.log(data);
  //     });
  // }, []);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const sources = [
    "Allergy",
    "Cardiology",
    "Cosmetic",
    "Dental",
    "Dermatology",
    "Gas",
    "General",
    "Kidney",
    "Liver",
    "Mental",
    "Neurology",
    "Ophthalmology",
    "Orthopedics",
    "Sleep",
  ];
  return (
    <div
      className="service-container"
      style={{ minHeight: "100vh", backgroundImage: "url(/img/test1.jpg)" }}
    >
      {catPage ? (
        <div className="service-outer">
          <div className="header-service">
            <h2
              style={{
                textAlign: "center",
                marginTop: "10px",
                display: "block",
                width: "100vw",
              }}
            >
              Medical Treatment
            </h2>
            <h4
              style={{
                textAlign: "center",
                marginTop: "10px",
                display: "block",
                width: "100vw",
              }}
            >
              Categories
            </h4>
            <div className="search-bar-service">
              <div className="input-group">
                <div className="form-outline">
                  <input
                    type="search"
                    id="form1"
                    className="form-control"
                    placeholder="Enter Category"
                    onChange={(e) => {
                      setService(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        setCatPage(!catPage);
                        setFlag(true);
                        flag1 = 0; 
                        document.querySelector("#form1").value = "";
                        setLocation(input);
                        document.querySelector("#form1").value = "";
                      }
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setFlag(true);
                    flag1 = 0;
                    console.log(flag);
                    document.querySelector("#form1").value = "";
                    setLocation("");
                    setCatPage(!catPage);
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="category-container">
            {sources.map((source, index) => {
              return (
                <div
                  className="card card-round"
                  style={{ width: "12rem" }}
                  onClick={() => {
                    setCatPage(!catPage);
                    setCategory(source);
                    flag1 = 0;
                    setFlag(false);
                    setLocation("");
                  }}
                >
                  <img
                    src={`/img/serviceImg/${source}.svg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body-service">
                    <p style={{ textAlign: "center" }}>{source}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="service-other-container">
          <h2 style={{ textAlign: "center" }}>Category : {category}</h2>
          <div className="service-inner-container">
            <button
              className="btn btn-primary"
              onClick={() => setCatPage(!catPage)}
            >
              {" "}
              Back to Select Category
            </button>
            <div
              className="input-group"
              style={{ width: "auto", margin: "auto" }}
            >
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Add location"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      console.log(input);
                      setLocation(input);
                      document.querySelector("#form1").value = "";
                    }
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setLocation(input);
                  document.querySelector("#form1").value = "";
                }}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
            <div className="input-box">
              Less than equal to:
              <label htmlFor="price">Cost: {price} (250000-2000000) </label>
              <input
                id="price"
                type="range"
                placeholder={100}
                onChange={(e) => {
                  if (e.target.value !== 0) {
                    setPrice(
                      ((2000000 - 250000) * e.target.value) / 100 + 250000
                    );
                  }
                }}
              ></input>
            </div>
          </div>
          <div className="category-containerinner">
            {fetchDatain.data.map((hospital, index) => {
              if (flag) {
                if (location == "") {
                  if (
                    typeof hospital[9] != typeof true &&
                    hospital[9].includes(
                      service.charAt(0).toUpperCase() + service.slice(1)
                    ) &&
                    hospital[11] <= price
                  ) {
                    flag1 = 1;
                    return (
                      <DataCard key={index} hospital={hospital} price={price} />
                    );
                  }
                } else {
                  if (
                    typeof hospital[9] != typeof true &&
                    hospital[9].includes(
                      service.charAt(0).toUpperCase() + service.slice(1)
                    ) &&
                    hospital[11] <= price &&
                    (location
                      .toLowerCase()
                      .includes(hospital[1].toLowerCase()) ||
                      location
                        .toLowerCase()
                        .includes(hospital[0].toLowerCase()))
                  ) {
                    flag1 = 1;
                    return (
                      <DataCard key={index} hospital={hospital} price={price} />
                    );
                  }
                }
              } else {
                if (location == "") {
                  if (
                    typeof hospital[9] != typeof true &&
                    hospital[9].includes(
                      category.charAt(0).toUpperCase() + category.slice(1)
                    ) &&
                    hospital[11] <= price
                  ) {
                    flag1 = 1;
                    return <DataCard key={index} hospital={hospital} />;
                  }
                } else {
                  if (
                    typeof hospital[9] != typeof true &&
                    hospital[9].includes(
                      category.charAt(0).toUpperCase() + category.slice(1)
                    ) &&
                    hospital[11] <= price &&
                    (location
                      .toLowerCase()
                      .includes(hospital[1].toLowerCase()) ||
                      location
                        .toLowerCase()
                        .includes(hospital[0].toLowerCase()))
                  ) {
                    flag1 = 1;
                    return <DataCard key={index} hospital={hospital} />;
                  }
                }
              }
            })}
            {flag1 == 0 && <div />}
            {flag1 == 0 && <h1 className="nodata">No data found</h1>}
            {flag1 == 0 && <div />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
