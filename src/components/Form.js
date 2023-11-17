import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import profile from "../image/profile.png"
import email from "../image/email.png"
import pass from "../image/pass.png"


 
export const Form = ()=> {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const[data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://randomuser.me/api/?seed=foobar`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  });
  const email = data;
  
  const loginF =()=>{
 console.log(data)
 console.log(username)
 if(username === email.results[0].email){
  navigate('home')
 }
 
  }
  
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text"  onChange={e=>setUserName(e.target.value)} placeholder="email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass"   className="email"/>
             <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button onClick ={()=>{loginF()}} >Login</button>
          </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
         </div>
       </div>
       

     </div>
    </div>
  )
}




