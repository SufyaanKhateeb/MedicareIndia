import React, { useState } from 'react'
const Location = () => {

    const [location, setLocation] = useState("");
    return (
        <div className="location">
            <div className="search-bar">
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1"  className="form-control"  placeholder="Enter location" onChange={(e)=>{
                            setLocation(e.target.value);    
                            }}  />
                        <label className="form-label" htmlFor="form1">Search</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>{document.querySelector('#form1').value="";}}>
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
