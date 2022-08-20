import { useState } from "react";

export default function Table() {
  const[allEntry,setAllEntry]=useState([]);
  return (
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
  )
}
