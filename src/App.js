import {Routes, Route} from 'react-router-dom'
import './App.css';
import {Form} from './components/Form'
import Home from './components/Home'

function App() {
  return (
   <Routes>
   <Route path='/' element={<Form/>}></Route>
   <Route path ='home' element = {<Home/>}/>
   </Routes>
  );
}

export default App;
