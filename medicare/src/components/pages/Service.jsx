import React from 'react'
import { useEffect, useState } from 'react'

const Service = () => {
    const [fetchData, setFetchData] = useState({});
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
        "Kidneys",
        "Liver",
        "Mental",
        "Neurology",
        "Ophthalmology",
        "Orthopedics",
        "Sleep",
    ]
    return (

        <div className="service-container">
            {catPage ? (<div>
                <div className='header-service'>
                    <h2 style={{ textAlign: "center", marginTop: "10px" }}>Medical Treatment</h2>
                    <h4 style={{ textAlign: "center", marginTop: "10px" }}>Categories</h4>
                </div>
                <div class="category-container" onClick={()=>setCatPage(!catPage)} >
                    {
                        sources.map((source, index) => {
                            return (<div class="card card-round" style={{ width: "12rem" }}>
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
                </div>)}

        </div>
    )
}

export default Service;
;