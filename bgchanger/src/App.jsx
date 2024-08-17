import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")
//  const setblue = ()=> {
//    setColor("blue")
//  }
  return (
    
      <div className="w-full h-screen duration-150 flex  justify-center items-center" style={{backgroundColor: color}}>
        
         <div className=" flex flex-wrap flex-col justify-center inset-x-0 p-5 bg-black rounded-3xl  shadow-xl gap-3">
            <button onClick={()=> setColor("blue")} className="bg-blue-900 rounded-lg p-1 px-2 outline-none text-white">blue</button>
            <button onClick={()=> setColor("red")} className="bg-red-900 rounded-lg p-1 px-2 outline-none text-white">red</button>
            <button onClick={()=> setColor("green")} className="bg-green-600 rounded-lg p-1 px-2 outline-none text-white">green</button>
            <button onClick={()=> setColor("yellow")} className="bg-yellow-500 rounded-lg p-1 px-2 outline-none text-white">yellow</button>
            <button onClick={()=> setColor("orange")} className="bg-orange-500 rounded-lg p-1 px-2 outline-none text-white">orange</button>
         </div>

      </div>
    
  )
}

export default App
