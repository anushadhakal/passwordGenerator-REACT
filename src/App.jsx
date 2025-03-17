import { useState } from 'react'
import './App.css'
import { LC, NC, SC, UC } from './Data/Data'


function App() {

  let [uppercase, setUpperCase] = useState (false)
  let [lowercase, setLowerCase] = useState (false)
  let [number, setNumber] = useState (false)
  let [symbol, setSymbol] = useState (false)
  let [password, setPassword] = useState (10)
  let [mainstate, setMainState] = useState ()

  let storeValue = ''
  let finalValue = ''
  let buttonClick = ()=>{
    if (uppercase || lowercase || number || symbol){
          if (uppercase){
            storeValue += UC
          }
          if (lowercase){
            storeValue += LC
          }
          if (number){
            storeValue += NC
          }
          if (symbol){
            storeValue += SC
          }
          for (let i = 0; i < password; i++){

            finalValue += storeValue[Math.round(Math.random()*storeValue.length)]
          }
         setMainState(finalValue);
         
          
    }else{
      alert ('Please select any one option!!!')
    }

  }
  let copyPw = ()=>{
    navigator.clipboard.writeText(mainstate)
  }
  

  return (
    <>
      <div  className='heading'>
        <h1>Password Generator</h1>
      </div>
      <br />
      <div className='inputField' >
        <input type="text" value = {mainstate} readOnly/> <button onClick = {copyPw}>Copy</button>
      </div>
      <div className='passLen'>
        <label> Password Length :</label>
        <input type="number" max={20} min={8} value = {password} onChange = {(event)=>setPassword(event.target.value)}/>
      </div>
      <div  className='upperCase'>
        <label> Include Uppercase Letters :</label>
        <input type="checkbox" checked = {uppercase} onChange = {()=>setUpperCase(!uppercase)}/>
      </div>
      <div className='lowerCase'>
        <label > Include Lowercase Letters :</label>
        <input type="checkbox" checked = {lowercase} onChange = {()=>setLowerCase(!lowercase)}/>
      </div>
      <div className='inclnum'>
        <label  > Include Numbers :</label>
        <input type="checkbox" checked = {number} onChange = {()=>setNumber(!number)} />
      </div>
      <div className='inclSym'>
        <label > Include Symbols</label>
        <input type="checkbox" checked = {symbol} onChange = {()=>setSymbol(!symbol)} />
      </div>
      <div className='btn'>
        <button onClick = {buttonClick}>Generate Password</button>
      </div>
      <div>
        
      </div>
      
    </>
  )
}


export default App
