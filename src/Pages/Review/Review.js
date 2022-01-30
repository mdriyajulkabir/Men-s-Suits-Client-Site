import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://vast-gorge-26267.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        } )
    }
    return (
        <>
        
        <div className='add-service'>
            <h2 className='text-center p-5' style={{color:'rgb(33, 62, 54)'}}>Please Add Your Review</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img")}placeholder='image url' />
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='please write your name' />
      <textarea {...register("review")}placeholder='write your review' />
      <input type="string" {...register("work")}placeholder='write your profession' />
      <input type="number" {...register("rating")}placeholder='give rating' />
      <input className='sub' style={{background:'rgb(33, 62, 54)'}} type="submit" />
    </form>
        </div>
       
        </>
    );
};

export default Review;