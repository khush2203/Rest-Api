import React, { useEffect, useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



import "./TutoList.css";
import axios from "axios";


const TutoList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/tutorial");
        setUser(result.data);
    };

    const deleteitem = async id => {
        await axios.delete(`http://localhost:3004/tutorial/${id}`);
        loadUsers();
      };


    return (
        <>
        <div className="leftFloat">

 <div className="main">
                <div className="child">
                    <h1>Tutorial List</h1>

                    <div className="table">
                <table class="table border shadow ml-2">
                                       
<tbody>                                        
      {users.map((user, index) => (                                      
       <tr>                                        
        <th scope="row">{index + 1}</th>
                                                    
        <td>{user.title}</td>
         <td>{user.description}</td>
                                                    
    <td>
      <Link class="btn btn-primary mr-2" to={`${user.id}`} > View </Link>
    </td>                                    
                                                       
   
 <td>                                                      
    <Link class="btn btn-danger" onClick={()=>deleteitem(user.id)}> <FontAwesomeIcon icon={faTrash}/></Link>
 </td>                                                          
 
  </tr>                                                                                                             
 
         ))}
 </tbody>
</table>                                                 
                                                    
 </div>
                    
  </div>
   <div>
                   <button type="button" className="btn btn-outline-danger btncls" >Remove all</button>
            </div>                                                                           
 
</div>

        </div>

       
        </>
    )
}

export default TutoList;
              
             

           
               
               

               
        