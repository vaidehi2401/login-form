import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Home extends Component{
  render() {
    return (
      <Container className = "container">
                <Row>
                    <Col><img   className = "portrait" src ="https://randomuser.me/api/portraits/women/74.jpg"/></Col>
                    <Col className = "text"><h1> Hello , My name is Mirjana.</h1>
                    <h2>This is some basic information about me.</h2>
                    <h3>Email: Mirjana.zivadinovic@example.com<br></br>Username: greenkoala278<br></br>
                    AGe: 26<br></br>
                    DOB: 7-12-1997<br>
              </br>
              Address: Street no: 730, Varvarin, podunavlje, Serbia</h3><br></br>
              <button type="button" class="btn btn-info">How Can I help you?</button>
                    </Col>
                </Row>
            </Container>
    )
  }
}

export default Home
