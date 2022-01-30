import { CircularProgress, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';

const Purchase = () => {
    const { id } = useParams();
    const {contexts, loading} = useAuth()
  const [service, setService] = useState({})
  
  useEffect(() => {
    fetch(`https://vast-gorge-26267.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; 
  const {name, price, img, } = service
  const initialInfo = {displayName: contexts.user.displayName, email: contexts.user.email,  size: '',  phone: ''}
  const [byeInfo, setByeInfo] = useState(initialInfo)
    const handleOnBlur = (e)=>{
      const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...byeInfo};
        newInfo[field] = value;
        setByeInfo(newInfo)
        console.log(newInfo);
    }
    const handleBuyNowSubmit = e =>{
        const order = {
            ...byeInfo,
            serviceName: name,
            price: price,
            img: img
        }
        fetch('https://vast-gorge-26267.herokuapp.com/myorder',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=>{
            alert("Parches Successfully")
            
        })
      
      e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            
            <Box className='mb-5' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {service.name}
          </Typography>
          { !loading &&
              <form onSubmit={handleBuyNowSubmit}>
                        <input type="text" 
                        disabled
                        style={{ width: '90%', marginLeft: '10px', marginBottom: '10px' , height: '60px' , display: 'flex', justifyContent: 'center'}}
                        name='name'
                        onChange={handleOnBlur}
                        // placeholder='Product name'
                        // label='Product name'
                        defaultValue={service.name}
                         />
                        <input type="text" 
                        required
                        style={{ width: '90%', marginLeft: '10px', marginBottom: '10px' , height: '40px' , display: 'flex', justifyContent: 'center'}}
                        name='size'
                        onChange={handleOnBlur}
                        defaultValue={service.size}
                         />
                        
                        
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            onChange={handleOnBlur}
                            name='displayName'
                            defaultValue={contexts.user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='email'
                            onChange={handleOnBlur}
                            defaultValue={contexts.user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name='phone'
                            onChange={handleOnBlur}
                            label='phone' 
                            size="small"
                        />
                        
                        <Button  type="submit" variant="contained">Submit</Button>
                    </form>}
                    {loading && <CircularProgress />}
        </Box>
        </>
    );
};

export default Purchase;