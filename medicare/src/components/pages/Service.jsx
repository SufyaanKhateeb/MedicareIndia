import React from 'react'
import { useEffect, useState } from 'react'

const Service = () => {
    const [fetchData, setFetchData]=useState({});
    const [service, setService] = useState("");
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
        "Dermathology",
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
            <div className='header-service'>
                <h2 style={{textAlign:"center", marginTop:"10px"}}>Medical Treatment</h2>
                <h4 style={{ textAlign: "center", marginTop: "10px" }}>Categories</h4>
            </div>
            <div class="category-container">
            {    
                sources.map((source,index)=>{
                    return (<div class="card card-round" style={{ width: "12rem" }}>
                        <img src={`/img/serviceImg/${source}.svg`} className="card-img-top" alt="..." />
                        <div class="card-body">
                            <p style={{ textAlign: "center" }}>{source}</p>
                        </div>
                    </div>);
                })
            }   
                
            </div>
        </div>
    )
}

export default Service;
;