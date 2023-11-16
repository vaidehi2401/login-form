import React, { Component } from 'react'
import {Card} from "antd";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
              <div>
              <img  className='portrait1' src = {datas.picture.medium}/>
              <Card className = "card">
              <div className = 'text4'> <h5 className='text2'>{datas.name.title} {datas.name.first}   {datas.name.last}</h5></div>
              </Card>
              <Card className='container'>
              <Container className >
                <Row>
                   <Col> 
                   <div className='text1'> <h4 className='text2'>DOB :</h4><div className = "myDiv">{datas.dob.date}</div></div>
                   <div className='text1'> <h4 className='text2'>Age :</h4><div className = "myDiv">{datas.dob.age}</div></div>
              </Col>
              <Col>
              <div className='text1'> <h4 className='text2'>Email:</h4><div className = "myDiv">{datas.email}</div></div>
              <div className='text1'> <h4 className='text2'>Phone:</h4><div className = "myDiv">{datas.cell}</div></div>
              </Col>
              <div className='text1'> <h4 className='text2'>Address: </h4><div className = "myDiv1">{datas.location.street.number} {datas.location.street.name} {datas.location.city} {datas.location.state} {datas.location.country}</div></div>
                </Row>
              </Container>
             </Card>
            
             </div>
          
            )
            )
            
    }

         
        </div>
      )
    }
  }
}

export default Home

    
