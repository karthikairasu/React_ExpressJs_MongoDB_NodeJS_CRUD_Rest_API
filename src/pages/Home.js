import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axois from "axios";
import { toast } from 'react-toastify';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    userList();
}, []);

const userList = async () => {
  const response = await axois.get("http://localhost:5000/userlist");
  if (response.status === 200){
    setData(response.data);
  }
};

const onDeleteUser = async (id) => {
  if(window.confirm("Are you sure that you wanted to delete that user record")){
    const response = await axois.delete(`http://localhost:5000/user/${id}`);
    if(response.status === 200){
      toast.success(response.data);
      userList();
    }
  }
}

console.log("data=>", data);

  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-2">
              <h3 className="ps-2">Home</h3>
              <div style={{}}>
                <table className='table table-bordered text-center'>
                  <thead>
                    <tr className='table-primary'>
                      <th style={{ textAlign: "center" }}>No.</th>
                      <th style={{ textAlign: "center" }}>Name</th>
                      <th style={{ textAlign: "center" }}>Email</th>
                      <th style={{ textAlign: "center" }}>Contact</th>
                      <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.map((item, index) =>{
                      return(
                        <tr key={index}>
                          <td scope="row">{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.contact}</td>
                          <td>
                            <Link to={`/update/${item._id}`}>
                              <button className='btn btn-success mx-1'>Edit</button>
                            </Link>
                            <Link to="">
                              <button className='btn btn-danger mx-1' onClick={() => onDeleteUser(item._id)}>Delete</button>
                            </Link>
                            <Link to={`/view/${item._id}`}>
                              <button className='btn btn-info mx-1'>View</button>
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home