import React from "react";
import  "./TutoList.css";
import TutoList from "./TutoList";



const Add = () => {
    return (
        <div className="main">
   
   <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  


<TutoList/>
        </div>
    )
}

export default Add;
