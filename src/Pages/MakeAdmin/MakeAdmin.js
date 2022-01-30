import { Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        e.preventDefault()
        const proceed = window.confirm('Are You Sure, you want to make him admin?!?')
        if(proceed){
            const user = {email}
        fetch('https://vast-gorge-26267.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            
        })
        }
    }
    return (
        <div>
            <h2 className='text-center'>Make Admin</h2>
            <div className='d-flex justify-content-center'>
            <form onSubmit={handleAdminSubmit}>
                <input className='me-3'
                type="email"
                 name="" 
                 label='Email'
                 onBlur={handleOnBlur}
                 id="" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;