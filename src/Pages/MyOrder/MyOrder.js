import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrder = () => {
    const {contexts} = useAuth()
    const [orders, setOrders] = useState([])
    useEffect( ()=>{
        const uri=`https://vast-gorge-26267.herokuapp.com/myorder?email=${contexts.user.email}`
        fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            My Order: {orders.length}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>My Order</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.serviceName}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrder;