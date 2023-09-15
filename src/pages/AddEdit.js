import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify";
import {MDBInput} from 'mdb-react-ui-kit';

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {

  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;
 
  const history = useNavigate();

  const {id} = useParams();

  // Create a new User
  const registerUser = async (data) => {
    const response = await axios.post("http://localhost:5000/register", data);
    if(response.status === 200){
      toast.success(response.data);
    }
  };

  // Getting a user details
  useEffect(() =>{
    if(id){
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) =>{
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if(response.status === 200){
      setState(response.data);
    }
  };

  // Update a user Details
  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if(response.status === 200){
      toast.success(response.data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("Please provide value into each input field");
    }else{
        if(!id){
          registerUser(state);
        }else{
          updateUser(state, id)
        }

      setTimeout(() => history("/Home2"), 500);
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }
  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card p-2">
              <div className='card-body'>
              <h4 className="ps-2 text-center mb-3">{id ? "Edit User" : "Add User"}</h4>
              <form style={{}} onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                  <MDBInput wrapperClass='mb-4' label='Enter Name' size='lg' type='text' id="name" name="name" onChange={handleInputChange} value={name}/>
                </div>
                <div className='form-group mb-2'>
                  <MDBInput wrapperClass='mb-4' label='Enter Email' size='lg' type='email' id="email" name="email" onChange={handleInputChange} value={email}/>
                </div>
                
                <div className='form-group mb-2'>
                <MDBInput wrapperClass='mb-4' label='Enter Contact No' size='lg' type='number' id="contact" name="contact" onChange={handleInputChange} value={contact}/>
                </div>

                <div className='form-group mb-2'>
                  <input className='btn btn-success btn-block gradient-custom-4' size='lg' type='submit' value={id ? "update" : "Add"}/>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddEdit