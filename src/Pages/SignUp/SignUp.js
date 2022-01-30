import { Button, CircularProgress, TextField , Alert} from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footerr from '../Footerr/Footerr';
import Header from '../Home/Header/Header';

const SignUp = () => {
    const [loginData,setLoginData] = useState({})
    const {contexts} = useAuth();
    const {user, singinUsingGoogle,registerUser, loading, error} = contexts
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
    const handleSigninSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('password didnt match')
            e.preventDefault()
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name)
        history.push(redirect)
        e.preventDefault()
    }
    return (
        <>
            <Header></Header>
            <h1 className='text-center'>REGISTER</h1>
            
           <div className=' d-flex justify-content-center text-center'>
               <div>
           { !loading &&
               <form onSubmit={handleSigninSubmit}>
            <TextField 
            sx={{width:'75%' , m:1}}
            id="standard-basic" 
            type='text'
            label="Your Name" 
            name= 'name'
            onChange={handleOnChange}
            variant="standard" />
            <TextField 
            sx={{width:'75%' , m:1}}
            id="standard-basic" 
            type='email'
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
            <TextField 
            sx={{width:'75%' , m:1}}
            id="standard-basic" 
            label="Re-type Your Password" 
            type='password'
            name= 'password2'
            onChange={handleOnChange}
            variant="standard" />
            
            <Button 
            sx={{width:'75%' , m:1}} 
            type="submit"
            variant='contained'>Register</Button> <br />
            <NavLink to='/login' style={{textDecoration: 'none'}}>
                <Button variant="text" >ALREADY REGISTER? PLEASE LOGIN</Button>
            </NavLink>
            </form>}
            {loading && <CircularProgress />}
            {
                user?.email && <Alert severity="success">User Register Successfully!</Alert>
            }
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

export default SignUp;