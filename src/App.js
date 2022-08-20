import React, { useState }  from 'react'
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
// import Table from './components/Table';


function App() {
  
  const[mode,setmode]=useState('light');

  

return  (
  <>
<Navbar  title="healthyfitstyle" />


<Login/>
{/* <Table/> */}




</>
);
}


export default App;
