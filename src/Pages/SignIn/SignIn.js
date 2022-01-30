import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footerr from '../Footerr/Footerr';
import Header from '../Home/Header/Header';

const SignIn = () => {
    const [loginData,setLoginData] = useState({})
    const {contexts} = useAuth();
    const {singinUsingGoogle,loginUser, loading, error } = contexts
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home'
    const handleGoogleLogIn = ()=>{
        singinUsingGoogle(location, history)
      
    }
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogIndata = {...loginData};
        newLogIndata[field] =value;
        setLoginData(newLogIndata);
    }
    const handleloginSubmit = e =>{
        loginUser(loginData.email, loginData.password)
        history.push(redirect)
        e.preventDefault()
    }
    
    return (
        <>
            <Header></Header>
            <h1 className='text-center'>LOG IN</h1>
            
           <div className=' d-flex justify-content-center text-center'>
               <div>
           <form onSubmit={handleloginSubmit}>
            <TextField 
            sx={{width:'75%' , m:1}}
            id="standard-basic" 
            label="Your Email" 
            name= 'email'
            onChange={handleOnChange}
            variant="standard" />
            <TextField 
            sx={{width:'75%' , m:1}}
            id="standard-basic" 
            label="Your Password" 
            type='password'
            name= 'password'
            onChange={handleOnChange}
            variant="standard" />
            
            <Button 
            sx={{width:'75%' , m:1}} 
            type="submit"
            variant='contained'>Login</Button>
            <NavLink to='/signup' style={{textDecoration: 'none'}}>
                <Button variant="text" >NEW USER? PLEASE REGISTER</Button>
            </NavLink>
            </form>
            {loading && <CircularProgress />}
            {
                error && <Alert severity="error">{error}!</Alert>
            }
            
            </div>
           </div>



<div className='d-flex justify-content-center'>
     
    <button className='btn btn-warning' onClick={handleGoogleLogIn}>Google sign in</button>
</div>

            <Footerr></Footerr>
        </>
    );
};

export default SignIn;