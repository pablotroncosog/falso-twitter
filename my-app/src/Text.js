import React from "react";
function Text () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark d-flex">
  <div className="container-fluid d-flex">
    <a className="navbar-brand text-white padding-right-50px" href="/">Start Bootstrap</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white " href="/">About</a>
        </li>
        <li className="nav-item d-flex ">
          <a className="nav-link text-white d-flex  " href="/">Services</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white " href="/">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
} 

export default Text