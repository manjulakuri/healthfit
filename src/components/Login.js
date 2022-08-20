import React, { useState } from 'react'

export default function Login() {

       const[email,setEmail]=useState("");
       const[password,setPassword]=useState("");

       const[allEntry,setAllEntry]=useState([]);

     const submitForm =(e)=>{
         e.preventDefault();
            const newEntry ={email:email ,password:password};
            setAllEntry(...allEntry,newEntry)
            console.log(allEntry);
     }

  return (
    <>
     <form action= "" onSubmit={submitForm}>
     <div className="container text-center">
         <h1>Login form</h1>
    <div className="mb-3 row my-2">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control-plaintext" id="staticEmail" value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" value={password} 
      onChange={(e)=>setPassword(e.target.value)} />
    </div>
  </div>
  <div >
    <button type="submit"     className="btn btn-primary ">login</button>
  </div>
  </div>
  
  </form>
  
  <div>
      
      {
         allEntry.map((curEle)=>{
               
             return(
                <div className="container">
                  <p>{curEle.email}</p>
                  <p>{curEle.password}</p>
                 </div>
             )
          })
      }
   </div>
  </>
  )
}
