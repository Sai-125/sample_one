import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const [data,setdata] = useState([])
    console.log(data)
    // const [price,setprice] = useState(0)
    var price = 0
    // const arr = []
    // for(var i of data){
    //     arr.push(i.price)
    // }
    for(var k of data){
        price += parseInt(k.price)
    }
    console.log(price)
  
    
    // const [price,setprice] = useState()
    // var price = 0

    
    // for(var i=0;i<data.length;i++){
    //     // console.log(i.price)
    //     price += data[i].price
    // }
    // console.log(price)
    
    // data.forEach(e=>{
    //     price += e.price
    // })
    // console.log(price)
    
    const getcartapi = ()=>{
        axios.get('https://65e422c73070132b3b243fce.mockapi.io/cart')
        .then(res=>setdata(res.data))
    }
    useEffect(()=>{
        getcartapi()
        // arr.reduce((p,c)=>price = p+ c)
        // console.log(price)
        

        // const priceview = data.map(e=>e.price)
        // priceview.reduce((p,c)=>p+c)
        // setprice()
        // const price = priceview.reduce((p,c)=>p + c)
        // console.log(price)
    },[])
    // console.log(arr)

    const removehandle = (id) =>{
        axios.delete(`https://65e422c73070132b3b243fce.mockapi.io/cart/${id}`)
        .then(()=>getcartapi())
        .then(()=>alert('Item removed successfully'))
    }

    const orderhandle = async () =>{
        // axios.delete('https://65e422c73070132b3b243fce.mockapi.io/cart/true')
        // .then(()=>alert('order successfull'))
        const response = await axios.get('https://65e422c73070132b3b243fce.mockapi.io/cart');
        const allPosts = response.data;
  
        // Delete each post one by one
        await Promise.all(
          allPosts.map(async (post) => {
            await axios.delete(`https://65e422c73070132b3b243fce.mockapi.io/cart/${post.id}`)
            .then(()=>getcartapi())
            .then(()=>navigate('/order'))
          })
        );
    }

    return (
        <div className='m-5'>
            <h1 className='mb-3'>Cart</h1>
            {data.map(e=>{
                return(
                    <div className="border border-teritary mb-2 d-flex justify-content-between align-items-center p-2" key={e.id}>
                    <div className="">
                        <img src={e.image} alt={e.title} width={'180px'}/>
                    </div>
                    <div className="text-center">
                        <h2 className='text-primary'>{e.title}</h2>
                        <p>₹{e.price}</p>
                    </div>
                    <div className="">
                        <button className='btn bg-warning border border-0' onClick={()=>removehandle(e.id)}>Remove</button>
                    </div>
                    </div>
                )
            })}

            {data.length==0 && <div className='position-fixed top-50 start-50 translate-middle text-center'>
                <h1 className='mb-3'>Your cart is empty</h1> 
                <button className='btn bg-primary text-light' onClick={()=>navigate('/')}>Go to products</button>
                </div>}

           {data.length>0 && <div className="bg-secondary" style={{position:'fixed',bottom:'0',right:'0',left:'0'}}>
                <div className="d-flex justify-content-between align-items-center ms-4 mx-4 p-2">
                <h1 className='text-warning'>Total</h1>
                <p className='text-light' style={{fontSize:'18px',margin:'3px 0 0 120px'}}>₹ {price}</p>
                <button className='bg-primary border border-0 rounded-1 text-light' style={{width:'100px',height:'35px'}} 
                onClick={orderhandle}>Order</button>
                </div>
            </div>}

        </div>
    );
};

export default Cart;