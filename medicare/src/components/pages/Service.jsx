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
    return (
        <div>
            
        </div>
    )
}

export default Service;
;