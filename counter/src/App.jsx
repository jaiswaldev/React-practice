import { useState } from 'react'

import Card from './components/card'
import './App.css'


function App() {
 const [counter,setcounter] = useState(0)


 let myobj ={
   username: "dev jaiswal",
   age: 21
 }
  let myarr= [1,2,3]
  //let counter = 20;
  const addvalue =()=>{ 
    // console.log("clicked",counter)
    // counter++;
    if(counter>=20){
      setcounter(counter)
    }
    else{
    //  setcounter(counter+1)
    //  setcounter(counter+1)
    //  setcounter(counter+1)
    //  setcounter(counter+1)   //*************(important) these four line update the same counter. bcz useState jo hai saree updates jo krne hai ui mei vo batches mei bhejta hai so, wha pr vo counter update hi nhi ho rha hai after every update.

     setcounter(counter => counter+1 )
     setcounter(counter => counter+1 )
     setcounter(counter => counter+1 )
     }
  }
  const subvalue=()=>{
    // console.log("clicked",counter)
    if(counter <= 0){
      setcounter(0)
    }
    else{
     setcounter(counter-1)
    }
  }
  return (
    <>
    <div className='bg-black p-6 rounded-2xl '>
      <h1  className='mb-5'>Dev jaiswal</h1>
      <div className='mb-5 '>Counter : {counter}</div>
      <div className='gap-6 flex justify-center'>
         <button onClick={addvalue} >Go ahead</button>
         <button onClick={subvalue} >Come back</button>
      </div>
    </div>

    <Card  someobj={myobj} somearr = {myarr}/>
    </>
  )
}

export default App
