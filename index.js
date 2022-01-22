import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
); */

function navbar(){
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
function time(){
  return Math.round(Math.random()*100);
}
function cardImg(){
  return (
    <img src="https://picsum.photos/1000/800" className="img-fluid rounded-start p-2" alt="..." />
  )
}
function card(){
  return (
<div className="card mb-3 bg-dark" style={{maxWidth: "540px", margin : "15px", borderRadius : "0px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      {cardImg()}
    </div>
    <div className="col-md-8 text-white">
      <div className="card-body">
        <h5 className="card-title text-grey">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text pt-1"><small className="text-muted">Last updated {time()} mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}
function pagination(){
  return (
<nav aria-label="Page navigation example" style={{margin : "20px 0"}}>
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {navbar()}
    {card()}
    {card()}
    {card()}
    {card()}
    {pagination()}
  </React.StrictMode>,
  document.getElementById('app')
);
