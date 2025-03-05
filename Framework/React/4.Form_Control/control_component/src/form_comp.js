import {useState} from "react"

function FormComp(){
    const [name, setName] = useState("")
    function handleChange(e){
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(){
        console.log(name)
    }
    return(
        <>
            <input onChange={handleChange} value={name}></input>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default FormComp