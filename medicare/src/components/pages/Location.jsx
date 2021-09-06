import React, { useState, useEffect } from 'react'
import DataCard from '../DataCard';


const Location = () => {
    const [fetchData, setFetchData]=useState({});;
    // const fetching = async () => {
    //     const fetchData = await fetch('https://api.covid19india.org/data.json');
    //     const indata = await fetchData.json();
    //     console.log(indata);
    // }
    // fetching();

    useEffect(() => {
        fetch("https://medicareind-api.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                setFetchData(data);
            })
    }, [])
    const [location, setLocation] = useState("");
    return (
        <div className="location">
            <div className="search-bar">
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1"  className="form-control"  placeholder="Enter location" onChange={(e)=>{
                            setLocation(e.target.value);    
                            }}  />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>{
                        document.querySelector('#form1').value="";
                        fetchData.data.map((hospital,index)=>{
                            
                            if(hospital[1].toLowerCase()===location.toLowerCase())    
                                return console.log(hospital);
                        })
                        }}>
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div className="Render container">

            </div>
        </div>
    )
}

export default Location;
