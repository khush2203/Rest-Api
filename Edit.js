import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams ,Link } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    title: "",
    description: "",
    
    
  });

  const { title,description  } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/tutorial/${id}`, user);
    history.push("/Add");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/tutorial/${id}`);
    setUser(result.data);
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit </h2>

        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Title:"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
         </div>
<br/>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="description:"
              placeholder="Description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br/>

         
         <br/>
          <button className="btn btn-warning btn-block" >Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;