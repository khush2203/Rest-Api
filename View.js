import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./TutoList.css";

const View = () => {
  const [user, setUser] = useState({
    title: "",
    description: "",
    
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/tutorial/${id}`);
    setUser(res.data);
  };

  return (
      <>
    <div className="rightFloat">
     <h1>Tutorial</h1>
    <li className="list-group-item"> title:- {user.title}</li> <br/>
     <li className="list-group-item">  description:- {user.description}</li>
        <br/>
        <Link className="btn btn-warning btn-block" to={`/Edit/${user.id}`}>Edit</Link>
     </div>   
      
      
    </>
  );
};

export default View;