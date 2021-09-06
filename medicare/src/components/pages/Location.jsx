import React from 'react'

const Location = () => {
    return (
        <div className="location">
            <div className="search-bar">
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Enter location"/>
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location;
