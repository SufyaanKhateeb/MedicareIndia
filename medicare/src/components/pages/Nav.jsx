import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#23ABF2"}}>
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="/img/logo1.png" alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
  </div>
</nav>
    )
}

export default Nav;
