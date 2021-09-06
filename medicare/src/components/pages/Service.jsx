import React from 'react'
import { useEffect, useState } from 'react'
import DataCard from '../DataCard';

const Service = () => {
    const [fetchData, setFetchData] = useState({ data: [] });
    const [service, setService] = useState("");
    const [category, setCategory] = useState("");
    const [catPage, setCatPage] = useState(true);
    useEffect(() => {
        fetch("https://medicareind-api.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                setFetchData(data);
                console.log(data);
            })
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
    ]
    return (

        <div className="service-container">
            {catPage ? (<div className="service-outer">
                <div className='header-service'>
                    <h2 style={{ textAlign: "center", marginTop: "10px" }}>Medical Treatment</h2>
                    <h4 style={{ textAlign: "center", marginTop: "10px" }}>Categories</h4>
                    <div className="search-bar">
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
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {

                                    document.querySelector("#form1").value = "";
                                    setCatPage(!catPage);
                                }}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="category-container"  >
                    {
                        sources.map((source, index) => {
                            return (<div class="card card-round" style={{ width: "12rem" }} onClick={() => {
                                setCatPage(!catPage);
                                setCategory(source);
                            }}>
                                <img src={`/img/serviceImg/${source}.svg`} className="card-img-top" alt="..." />
                                <div class="card-body-service">
                                    <p style={{ textAlign: "center" }}>{source}</p>
                                </div>
                            </div>);
                        })
                    }

                </div>
            </div>) : (
                <div className="service-other-container">
                    <div className="service-inner-container">
                        <button className="btn btn-primary" onClick={() => setCatPage(!catPage)}>Select Category</button>
                        <div className="input-box">
                            <label htmlFor="price">Set Range: 250000-2000000</label>
                            <input id="price" type="range"></input>
                        </div>
                    </div>
                    <div className="Render container">
                        {
                            fetchData.data.map((hospital, index) => {
                                if (typeof (hospital[9]) != typeof (true) && hospital[9].includes(category.charAt(0).toUpperCase() + category.slice(1))) {
                                    
                                    return <DataCard key={index} hospital={hospital} />;
                                }


                            })
                        }
                    </div>
                </div>)}

        </div>
    )
}

export default Service;
;