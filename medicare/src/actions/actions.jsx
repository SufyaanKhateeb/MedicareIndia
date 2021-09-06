const fetchData = () => {
    return (dispatch) => {
        fetch("https://medicareind-api.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: "FETCH_DATA",
                    payload: data
                });
            })
    }
}

export default fetchData;