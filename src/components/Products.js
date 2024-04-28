import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {

    const [data,setdata] = useState([])

    console.log(data)

    const getapi = ()=>{
        axios.get('https://65e422c73070132b3b243fce.mockapi.io/products')
        .then(res=>setdata(res.data))
    }
    
    useEffect(()=>{
        getapi()
    },[])


    const sendcart = (title,image,des,price)=>{
        axios.post('https://65e422c73070132b3b243fce.mockapi.io/cart',{title:title,image:image,description:des,price:price})
        .then(()=>alert('Item added successfully to the cart'))
    }




    return (
        <div className="m-5">
            <h1 className='mb-3 '>Products</h1>
        <div className='d-flex flex-wrap gap-5'>
    
    {data.map(e=>{
        return(
        <div class="card" style={{width:'18rem'}} key={e.id}>
        <img src={e.data.image} class="card-img-top" alt={e.data.title} style={{width:'100%',height:'250px',objectFit:'contain'}}/>
        <div class="card-body">
            <h5 class="card-title">{e.data.title}</h5>
            <p>{e.data.description}</p>
            <p class="card-text d-flex align-items-center" >₹{e.data.price} <span className='ms-3' style={{display:'flex',alignItems:'center'}}><i className='fa-solid fa-star' style={{fontSize:'13px',color:'yellow'}}></i> {e.data.rating}</span></p>
            <button class="btn btn-primary" onClick={()=>sendcart(e.data.title,e.data.image,e.data.description,e.data.price)}>Add to cart</button>
        </div>
        </div>
        )
    })}
        </div>
        </div>

    );
};

export default Products;