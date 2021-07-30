import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    description: "",
    
  });

  const { title, description } = user;
  
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/tutorial",user);
    history.push("/Add");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Tutorials</h2>

        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label for="inputCity">Title</label> <br/>
            <input
              type="text"
              className="form-control form-control-lg"
              id="inputCity"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br/>

          <div className="form-group">
          <label for="inputCity" >Description</label> <br/>
            <input
              type="text"
              className="form-control form-control-lg"
              id="inputCity"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
         <br/>
          <button className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;