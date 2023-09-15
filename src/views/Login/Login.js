import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow, 
    MDBCol,
    MDBContainer,
    MDBInput
  } from 'mdb-react-ui-kit';
import Header from '../../layout/Header';

function Login() {
  return (
    <div className='main'>
        <Header/>
        <MDBContainer className='container-fluid'>
            <MDBRow className='login d-flex justify-content-center align-items-center'>
                <MDBCol  md='4'>
                    <MDBCard className='cardbg'>
                        <MDBCardBody>
                            <MDBCardTitle className='text-center mb-4'>Login</MDBCardTitle>
                            <MDBCardText>
                            </MDBCardText>
                                <form action=''>
                                   <div className='form-group mb-4'>
                                        <select className='form-control'>
                                            <option>Admin</option>
                                            <option>Supervisor</option>
                                            <option>Tenant</option>
                                        </select>
                                    </div>
                                    <div className='form-group mb-4'>
                                        <MDBInput label='Login' id='formControlDefault' type='text' />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <MDBInput label='Password' id='formControlDefault' type='text' />
                                    </div>
                                </form>
                            <MDBBtn className='login_btn btn-block btn-primary'><Link to='/Dashboard'>Login</Link></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
       
    </div>
  )
}

export default Login