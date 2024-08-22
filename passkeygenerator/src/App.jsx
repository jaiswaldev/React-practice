import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(4);
  const [numbers, setnumbers] = useState(false);
  const [char, setchar] = useState(false);
  const [key, setkey] = useState("");
  const keyref = useRef(null)


  const keygenerator = useCallback(() => {
    let pss = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789"
    let chart ="!@#$%~`^*"

    if (numbers) str += "0123456789";
    if (char) str += "!@#$%~`^*";
  

    for(let i = 1; i <= length; i++){
        let x = Math.floor(Math.random()*str.length);
        
        pss += str.charAt(x);
    }
    setkey(pss);
  }, [length, numbers, char]);

  // keygenerator()   //we can't call this function here.
  
  const copied=useCallback(()=>{
    keyref.current?.select()
    // keyref.current?.setSelectionRange(1,6);  upper limit not included
    window.navigator.clipboard.writeText(key)

  },[key])


  useEffect(()=>{
    keygenerator()
  },[length, numbers, char, keygenerator])
  
 
  

  return (
    <>
      <div className=" bg-black w-full h-screen items-center justify-center flex ">
        <div className="text-center bg-gray-700 p-7 text-4xl text-black rounded-xl">
          <h1>Key Generator</h1>

          <div className="py-6 flex items-center justify-center">
            <input
              type="text"
              value={key}
              className="w-full outline-none px-3 py-2 h-8 rounded-l-xl text-xl"
              placeholder="key"
              readOnly
              ref={keyref}
            />
            <button 
            onClick={copied}
            className="bg-blue-500 text-white px-2 py-0.5 rounded-r-xl items-center flex justify-center text-xl shrink-0">
              copy
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <input
                type="range"
                min={4}
                max={12}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className="text-xl">Length: {length}</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                defaultChecked={numbers}
                onChange={() => {
                  setnumbers((numbers) => !numbers);
                }}
              />
              <label className="text-xl">Numbers</label>
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                defaultChecked={char}
                onChange={() => {
                  setchar((char) => !char);
                }}
              />
              <label className="text-xl">Character</label>
            </div>
          </div>

          {/* <div className="flex items-center justify-center mt-3">
            <button 
            className="bg-white p-2 rounded-xl"
           
            >Start</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
