import {useState} from "react"

function RandomNum(){
  var [num, setNum] = useState(0)

  function generate(){
    var ran = Math.floor(Math.random() * 10) + 1
    setNum(ran)
  }

  return(
    <div>
      <h1>{num}</h1>
      <button onClick={generate}>random</button>
    </div>
  )
}

export default RandomNum