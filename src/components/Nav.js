import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const[data,setdata] = useState([])

  const [search,setsearch] = useState()
  const getapi = ()=>{
    axios.get('https://65e422c73070132b3b243fce.mockapi.io/products/')
    .then(res=>setdata(res.data))
}

  // const filter = data.map(e=>e)
  // console.log(filter)
  let filtered = data.filter(e=>e.data.title.toLowerCase().includes(search))
  console.log(filtered)

  // const filtered = data.filter(e=>e.data.title.toLowerCase().includes(search.toLowerCase()))
  
  // console.log(search)
  // console.log(filtered)

  useEffect(()=>{
    getapi()
  },[])

  // console.log(filter)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to={'/'}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/add_item'}>Add Item</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/edit_item'}>Edit Item</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/Cart'}>Cart</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/#">Add Item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Add Item</a>
        </li> */}
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link " aria-disabled="true" href='/#'>Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <div className="position-relative">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>setsearch(e.target.value)}/>
          {search!=='' && <div className="position-absolute border rounded-2" style={{zIndex:'10',left:'0',top:'100%',right:'0'}}>
            {filtered.map(e=>{
              return(
                <div className="bg-light d-flex align-items-center" key={e.id} style={{cursor:'pointer',padding:'5px'}}>
                  <img src={e.data.image} alt="" width={'30px'}/>
                  <h5 style={{marginLeft:'10px'}}>{e.data.title}</h5>
                </div>
              )
            })}
          </div>}
        </div>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;