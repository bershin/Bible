import {useState} from "react"
import Result from "./result_comp"

function FormComp(){
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [result, setResult] = useState("")

    const handleFNChange = (e)=>{
        setFName(e.target.value)
    }

    const handleLNChange= (e)=>{
        setLName(e.target.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setResult(fname+" "+lname)
    }

    return(
        <>
            <form>                
                <label htmlFor="">First Name</label>
                <input onChange={handleFNChange} value={fname}></input><br/>
                <label htmlFor="">Last Name</label>
                <input onChange={handleLNChange} value={lname}></input><br/>
                <button onClick={handleSubmit}>Submit</button>
                <Result res={result}/>
            </form>
        </>
    )
}

export default FormComp