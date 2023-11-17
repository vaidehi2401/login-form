import React, { Component } from 'react'
import {Card} from "antd";
import {Form} from './Form';

export class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      loading: false,
    }
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/?seed=foobar")
    .then((response)=>response.json())
    .then((response)=>{
      this.setState({
        data: response.results,
        loading: true
      })
    })
  }
 
  render() {
    var{data, loading} = this.state
    if(!loading){
    return (
      <div>
        loading...
      </div>
    )
    }
    else{
      return(
        <div>
         
            {data.map(datas=>(
              <>
              <img  className='portrait1' src = {datas.picture.medium}/>
              <Card className = "card">
              <div className = 'text4'> <h5 className='text2'>{datas.name.title} {datas.name.first}   {datas.name.last}</h5></div>
              </Card>
            <Card className = 'maindiv1'>
                <div class ="row align-items-start">
                  <div class ="col-2">
                    <h6>Gender</h6>
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.gender}</div>
                  </div>
                  <div class = "col-2">
                    Age
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.dob.age}</div>
                  </div>
                </div>
                <div class ="row align-items-center">
                  <div class ="col-2">
                    <h6>DOB</h6>
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.dob.date}</div>
                  </div>
                  <div class = "col-2">
                    Email
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv"> {datas.email} </div>
                  </div>
                </div>
                <div class ="row align-items-center">
                  <div class ="col-2">
                    <h6>Number</h6>
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.cell}</div>
                  </div>
                  <div class = "col-2">
                    Username
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.login.username}</div>
                  </div>
                </div>
              <div class ="row align-items-center">
                  <div class ="col-2">
                    <h6>Password</h6>
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.login.password}</div>
                  </div>
                  <div class = "col-2">
                    Address
                  </div>
                  <div class ="col-4">
                  <div className = "myDiv">{datas.location.street.number} {datas.location.street.name} {datas.location.city} {datas.location.state} {datas.location.country}</div>
                  </div>
                </div>
               </Card>
            </>
             
            )
            )        
    }
        </div>
      )
    }
  }
}

export default Home

    
