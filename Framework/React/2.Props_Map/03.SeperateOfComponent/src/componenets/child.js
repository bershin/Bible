import GrandChild from "./grand"

function Child(name){
    return(
      <div>
        <h2>I am Child</h2>
        <GrandChild name = {name.name}></GrandChild>
      </div>
    )
  }

export default Child