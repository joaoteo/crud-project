    import { Link } from 'react-router-dom';
    import axios from 'axios';
    import { useState } from "react";
    import React from "react"
    import {bootstrap} from "react-bootstrap"


function Navbar () {
    return (

      <nav className="navbar navbar-dark bg-primary mb3">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
      </nav>




/* 
      //   <nav className="navbar navbar-light nav-top">
      //   <div className="container-fluid nav-container">
      //     <Link className="navbar-brand" to="http://127.0.0.1:5500/index.html" target="_blank">
      //       {/* <img src="../images/brand.png" style={{width:"130px"}}/> */
          
      //     </Link>
      //     <form className="d-flex">
      //       <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/> 
      //     </form>
      //     <div className="icon-container">

        
      //         <Link to="">
      //           <i className="bi bi-house-door">House</i>
      //         </Link>
        

      //       <Link to="">
      //         <i className="bi bi-house-or">House</i>
      //       </Link>
      //       <Link to="">
      //         <i className="bi bi-inbox" >House</i>
      //       </Link>
      //       <Link to="">
      //         <i className="bi bi-compass"></i>
      //       </Link>

      //       <Link to="">
      //         <i className="bi bi-heart" ></i>              
      //       </Link>

      //       <Link to="http://127.0.0.1:5500/index.html">
      //         <i className="bi bi-instagram"></i>
      //       </Link>

      //     </div>
      //   </div>
      // </nav> */}
    )    
    
}
export default Navbar
