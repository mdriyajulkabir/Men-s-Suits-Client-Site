import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect( ()=>{
        const uri=`https://vast-gorge-26267.herokuapp.com/myorder`
        fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            setAllOrders(data)
            console.log(data)
        })
    },[])
    // DELETE AN USER
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are You Sure, you want to delete?!?')
        if(proceed){
            const uri=`https://vast-gorge-26267.herokuapp.com/myorder/${id}`;
        fetch(uri, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                
                const remainigOrders = allOrders.filter(allOrder => allOrder._id !== id)
                setAllOrders(remainigOrders)
            }
        }) 
        }
    }
    return (
        <div>
            My Order: {allOrders.length}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>My Order</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.serviceName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"> <Button variant="contained" onClick={() => handleDeleteUser(row._id)}>Delete</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrder;