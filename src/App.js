import {useState} from 'react';
import './App.css';

function App() {

const [num1,setNum1]=useState("");
const [num2,setNum2]=useState("");
const [num3,setNum3]=useState("")
const [add,setAdd]=useState(0);

const calcySum =(e)=>{
e.preventDefault() 

if (num1==="" || num2==="" || num3==="") {
  alert("Please enter the correct Values")
}
else{
  let add=parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
  
setAdd(parseInt(add))
}
}
const handleClick =(e)=>{
setAdd(0)
window.location.reload();}

  return (
    <div className="text-center m-5">
      <div className="Infomation mt-5">
      <h1 className="text-4xl font-thin"><b>Simple Interest Calculator</b></h1>
      <p className="m-2 font-thin"><b>Calculate your Simple interest Easily </b></p>
      </div>
     <input type="text" value={add} className="Output border px-14 py-7 bg-[#bef264] text-black rounded-lg text-center"/>
<br></br>
<form onSubmit={calcySum}>
<input type="text" placeholder="Principal amount" value={num1} onChange={(e)=>setNum1(e.target.value)} className="Output border  px-5 py-3 text-black rounded-lg m-4 border-slate-600 "/>
<br></br>
<input type="text" placeholder="Rate of interest (p.a)" value={num2} onChange={(e)=>setNum2(e.target.value)}  className="Output border px-5 py-3 text-black rounded-lg m-4 border-slate-600 "/>
<br></br>
<input type="text" placeholder="Time Period (Year)" value={num3} onChange={e=>setNum3((e).target.value)}  className="Output border px-5 py-3 text-black rounded-lg m-4 border-slate-600 "/>
<br></br>
<div className=''>
<button className="px-4 py-3 border text-white bg-slate-900 rounded-lg ">Calculate</button>
<button className="px-7 py-3 border text-slate-800 bg-slate-400 rounded-lg np" onClick={handleClick}>Reset</button>
</div>
</form>
    </div>
  );
}

export default App;
