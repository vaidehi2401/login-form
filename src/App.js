import {Routes, Route, Switch, BrowserRouter} from 'react-router-dom'
import './App.css';
import {Form} from './components/Form'
import Home from './components/Home'
import Test from './components/Test'
import {useEffect, useState} from "react";

function App() {
  {/*const [token, setToken] = useState();
  if(!token){
    return <Form setToken = {setToken}/>
  }*/}
  
  return (
   <Routes>
   <Route path='/' element={<Form/>}></Route>
   <Route path ='home' element = {<Home/>}/>
   <Route path ='test' element = {<Test/>}/>
   </Routes>
  );
}

export default App;
