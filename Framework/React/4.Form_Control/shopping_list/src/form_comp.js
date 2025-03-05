import {useState} from "react"

function FormComp(){
    const [product, setProduct] = useState("")
    const [myList, setMyList] = useState(["tomato","potato"])

    const handleChange = (e)=>{
        setProduct(e.target.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setMyList([...myList, product])
        setProduct("")
    }

    return(
        <>
            <form>                
                <input type="text" onChange={handleChange} value={product}/>
                <button onClick={handleSubmit}>Add</button>
                <ul>
                    {myList.map((item)=>{
                        return <li>{item}</li>
                    })}
                </ul>
            </form>
        </>
    )
}

export default FormComp