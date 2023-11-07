import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home(){
   
   
  const [data, setData] = useState([])
   const apiget=()=>{
fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then((json)=>{
  console.log(json);
  setData(json);
  console.log(data.results[0].gender)

})
   };
   

   return(
    <>
    

   <div className='UserData'>< button onClick ={()=>{apiget()}}>User Data</button></div>
   <Container className = "container">
      <Row>
         <Col>
 
   <div className='col1'><div className = 'text1'><h4 className = 'text2'> Name :</h4> <h5 className='text2'>{data.results[0].name.title}  {data.results[0].name.first}   {data.results[0].name.last}</h5></div>
   
   <div className='text1'><h4 className='text2'>DOB: </h4><h5 className='text2'>{data.results[0].dob.date}</h5></div>
   <div className='text1'><h4 className='text2'>Age: </h4><h5 className='text2'>{data.results[0].dob.age}</h5></div>
   
   
   <div className = 'text1'><h4 className='text2'>Address: </h4> <h5 className='text2'>{data.results[0].location.street.number} {data.results[0].location.street.name} {data.results[0].location.street.number} {data.results[0].location.city} {data.results[0].location.state} {data.results[0].location.country}</h5> </div>
   
<div className = 'text1'><h4 className='text2'>Email: </h4> <h5 className='text2'>{data.results[0].email}</h5></div>
   <div className = 'text1'><h4 className='text2'>Phone number: </h4><h5 className='text2'>{data.results[0].cell}</h5></div> </div></Col>
<Col><img  className='portrait' src = {data.results[0].picture.medium}/></Col>
 </Row>
   </Container>
    </>
   )
  
  
  
}

export default Home;

