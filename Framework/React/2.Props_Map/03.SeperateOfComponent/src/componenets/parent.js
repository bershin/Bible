import Child from "./child"

function Parent(){
    var fName = "John"
    return(
      <div>
        <h1>I am Parent</h1>
        <Child name = {fName}></Child>
      </div>
    )
  }

export default Parent