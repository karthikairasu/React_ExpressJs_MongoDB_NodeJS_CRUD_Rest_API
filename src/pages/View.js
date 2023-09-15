import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from "axios";

const View = () => {
  const [user, setUser] = useState(null);

  const {id} = useParams();

  useEffect(() =>{
    if(id){
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) =>{
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if(response.status === 200){
      setUser(response.data);
    }
  };
  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-2">
              <div className='row'>
                <div className='col-md-6 mx-auto'>
                <div className="card">
                  <div className="card-header"><h4 className="ps-2">User Detail</h4></div>
                  <div className="card-body">
                    <table className='table table-borderless'>
                      <tbody>
                        <tr>
                          <th>ID:</th>
                          <td>{id}</td>
                        </tr>
                        <tr>
                          <th>Name:</th>
                          <td>{user && user.name}</td>
                        </tr>
                        <tr>
                          <th>Email:</th>
                          <td>{user && user.email}</td>
                        </tr>
                        <tr>
                          <th>Contact:</th>
                          <td>{user && user.contact}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to="/Home2">
                      <button className='btn btn-primary'>Go Back</button>
                    </Link>
                  </div>
                </div>
                    
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default View