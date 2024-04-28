import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edititem = () => {

    const navigate = useNavigate()
    // const [store,setstore] = useState({
    //     id:'',
    //     image:'',
    //     description:'',
    //     title:'',
    //     price:''
    //     })

    const [data,setdata] = useState([])

    console.log(data)

    const getapi = ()=>{
        axios.get('https://65e422c73070132b3b243fce.mockapi.io/products')
        .then(res=>setdata(res.data))
    }
    
    useEffect(()=>{
        getapi()
    },[])


    // const sendcart = ()=>{
    //     axios.post('https://65e422c73070132b3b243fce.mockapi.io/cart')
    //     .then(()=>alert('submitted successfully'))
    // }

    const updatehandle = (id,img,des,tit,price,rating)=>{
        // navigate('/add_item')
        // console.log(id,img)

        try{
            // setstore({
            //     id:id,
            //     image:img,
            //     description:des,
            //     title:tit,
            //     price:price
            // })
            localStorage.setItem('updateitems',JSON.stringify({id:id,image:img,description:des,title:tit,price:price,rating:rating}))
            navigate('/add_item')
        }
        catch(err){
            console.log(err)        
        }
    }

    const deletehandle = (id)=>{
        try{
            axios.delete(`https://65e422c73070132b3b243fce.mockapi.io/products/${id}`)
            .then(()=>getapi())
            .then(()=>alert('Deleted Successfully'))
            
        }
        catch(err){
            console.log(err)
        }
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
            <div className="d-flex justify-content-between">
            <button class="btn btn-primary" onClick={()=>updatehandle(e.id,e.data.image,e.data.description,e.data.title,e.data.price,e.data.rating)} style={{width:'40%'}}>Update</button>
            <button class="btn btn-warning" onClick={()=>deletehandle(e.id)} style={{width:'40%'}}>Delete</button>
            </div>
        </div>
        </div>
        )
    })}
        </div>
        </div>

    );
};

export default Edititem;