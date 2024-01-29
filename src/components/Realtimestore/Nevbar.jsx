import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Nevbar({activeUser}) {
  const [flag,setFlag] = useState(false)

  useEffect(()=>{
    const foundUser = JSON.parse(localStorage.getItem('activeuser'))
      if(foundUser){
        setFlag(true)
      }else{
        setFlag(false)
      }
  },[activeUser])
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("activeuser");
    navigate("/login");
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class=" ">
          <Link to={"/"} class="navbar-brand nav-link text-light" >Home</Link>
        </li>
        {flag ? <><li class="">
        <Link to={"/student"} class="nav-link text-light" >StudentList</Link>
        </li>
        <li class="nav-item">
        <Link to={"/change-password"} class="navbar-brand nav-link  text-light" >Change Password</Link>
        </li>
        <li class="nav-item">
        <a href="" className='nav-item nav-link text-light' onClick={handleLogout}>Logout</a>
        </li> </> :<>
        <li class="nav-item fs-5">
        <Link to={"/login"} class="nav-link  text-light" >Login</Link>
        </li>
        <li class="nav-item">
        <Link to={"/signup"} class="nav-link  text-light" >Signup</Link>
        </li>
        
    
        </>
        

        }
      </ul>
    </div>
  </div>
</nav>
  )
}