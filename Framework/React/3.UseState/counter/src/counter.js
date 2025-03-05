import {useState} from "react"

function ChangeState(){
    var [num, setState] = useState(0)
  
    function increase(){
      setState(num+1)
    }
  
    function reduce(){
      setState(num-1)
    }
  
    return(
      <div>
        <button onClick={reduce}>-</button>
        <h1>{num}</h1>
        <button onClick={increase}>+</button>
      </div>
    )
  }

  export default ChangeState