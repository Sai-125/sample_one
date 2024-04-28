import React, { useEffect, useState } from 'react';
import './Additem.css'
import axios from 'axios';
const Additem = () => {
    
    const [localid,setlocalid] = useState()
    const [data,setdata] = useState({
        // id:'',
        title:'',
        image:'',
        description:'',
        rating:'',
        price:''
    })

    const apisend = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const handlesubmit =()=>{
        axios.post('https://65e422c73070132b3b243fce.mockapi.io/products',{data})
        .then(()=>alert('Submitted Successfully'))

        setdata({
            title:'',
            image:'',
            description:'',
            rating:'',
            price:''
    })
    }

    useEffect(()=>{
        var local = localStorage.getItem('updateitems')
        var localstore = JSON.parse(local)
        console.log(localstore)
        setdata({
            // id:localstore.id,
            title:localstore.title,
            image:localstore.image,
            description:localstore.description,
            rating:localstore.rating,
            price:localstore.price
    })
    setlocalid(localstore.id)
    },[])

    const handleupdate = ()=> {
        try{
            axios.put(`https://65e422c73070132b3b243fce.mockapi.io/products/${localid}`,{data
                                                                                    //  title:data.title,
                                                                                    //  image:data.image,
                                                                                    //  description:data.description,
                                                                                    //  rating:data.rating,
                                                                                    //  price:data.price
                                                                                    }
            )
            .then(()=>localStorage.setItem('updateitems',JSON.stringify({id:'',image:'',description:'',title:'',price:'',rating:''})))
            .then(()=>alert('Updated successfully'))
            setdata({
                id:'',
                title:'',
                image:'',
                description:'',
                rating:'',
                price:''

        })
        setlocalid('')
        }
        catch(err){
            console.log(err)
        }
  
        // console.log(data)
    }
    return (
        <div className='add'>
            {/* <center> */}
            <div className="add_main">
                <div className="add_sub">
                {localid==''?<h1>Add Item</h1>:<h1>Update Item</h1>}
                <input type="text"  placeholder='Title' onChange={apisend} name='title' value={data.title} className='add-inp'/>
                <input type="text"  placeholder='Image url' onChange={apisend} name='image' value={data.image} className='add-inp'/>
                <input type="text"  placeholder='Description' onChange={apisend} name='description' value={data.description} className='add-inp'/>
                <input type="text"  placeholder='Rating' onChange={apisend} name='rating' value={data.rating} className='add-inp'/>
                <input type="text"  placeholder='Price' onChange={apisend} name='price' value={data.price} className='add-inp'/>
                {localid==''?<button onClick={handlesubmit} className='add_btn'>Add</button>:
                <button onClick={handleupdate} className='add_btn bg-primary'>Update</button>}
                </div>
            </div>
            {/* </center> */}
        </div>
    );
};

export default Additem;